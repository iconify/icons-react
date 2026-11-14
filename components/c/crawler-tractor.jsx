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
		"content": `<style>.wdd7j0ikv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 15h12.5a3.25 3.25 0 0 1 3.25 3.25a3.25 3.25 0 0 1-3.25 3.25H5.75a3.25 3.25 0 0 1-3.25-3.25A3.25 3.25 0 0 1 5.75 15M4 15v-5h8V3.5h7V15M7 10V5m0 13.25h.01m4.99 0h.01m4.99 0h.01");
}
</style><path class="wdd7j0ikv"/>`,
		"fallback": "uix:crawler-tractor",
	});
}

export default Component;
