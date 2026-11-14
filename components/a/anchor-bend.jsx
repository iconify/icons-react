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
		"content": `<style>.d0o4aecsk {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2V21m-7.5-7a7.5 7.5 0 0 0 15 0M8 9.5h8");
}

.rlf9gvuii {
  d: path("M11 4.5h5c2 0 2.5 2.5 4.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d0o4aecsk"/><path class="rlf9gvuii"/></g>`,
		"fallback": "uix-sharp:anchor-bend",
	});
}

export default Component;
