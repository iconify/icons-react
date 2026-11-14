import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aztl26bvm {
  d: path("M2.5 16.5V7A1.5 1.5 0 0 1 4 5.5h11v11Zm12.5-7h3.5l3 3.5v3.5H15");
}

.cch-_893i {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-9-5.5a2.5 2.5 0 0 1 5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aztl26bvm"/><path class="cch-_893i"/></g>`,
		"fallback": "uix-sharp:catering-van",
	});
}

export default Component;
