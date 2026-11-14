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
		"content": `<style>.d_-ir7pzy {
  d: path("M4.5 2.5h15v19h-15Zm3 4.5h9m-7 3.5h5M9.25 15v3.5");
}

.i1yj1kvwv {
  d: path("m12.25 15l1.5 3.5l1.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d_-ir7pzy"/><path class="i1yj1kvwv"/></g>`,
		"fallback": "uix-sharp:front-matter",
	});
}

export default Component;
