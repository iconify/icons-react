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
		"content": `<style>.h_37u1r3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l8 3V11c0 5-3.5 8.5-8 10.5c-4.5-2-8-5.5-8-10.5V5.5Zm3 6l-6 7M8.75 9h.01m6.49 6h.01");
}
</style><path class="h_37u1r3h"/>`,
		"fallback": "uix:coverage-badge",
	});
}

export default Component;
