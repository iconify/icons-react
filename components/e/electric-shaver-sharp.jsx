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
		"content": `<style>.l79nns4id {
  d: path("M6.25 2.75h11.5v4.5H6.25zM8.5 5h7M8.75 9.75h8.5l-.22 1.99l-.81 7.52l-.22 1.99H8l-.22-1.99l-.81-7.52l-.22-1.99z");
}

.prz5adf_y {
  d: path("M13.5 15.25a1.5 1.5 0 1 1-3 0a1.5 1.5 0 1 1 3 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l79nns4id"/><path class="prz5adf_y"/></g>`,
		"fallback": "iconoven:electric-shaver-sharp",
	});
}

export default Component;
