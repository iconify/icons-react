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
		"content": `<style>.bu9r85lja {
  d: path("m4 9.5l2.5-1.75L9 8l2 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxdimmwfv {
  d: path("M14 21V4.5A1.5 1.5 0 0 1 15.5 3h4A1.5 1.5 0 0 1 21 4.5V21M6.75 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM8 7.5l-1.5 5L9 15l-.5 6m-2-8.5l-2 3h-2");
}
</style><g class="ulnmmdpxh"><path class="xxdimmwfv"/><path class="bu9r85lja"/></g>`,
		"fallback": "uix-sharp:hospital-fire-exit",
	});
}

export default Component;
