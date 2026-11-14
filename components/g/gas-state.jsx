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
		"content": `<style>.yfj7djkmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.875 6h8.25a4.375 4.375 0 0 1 4.375 4.375v6.75a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 3.5 17.125v-6.75A4.375 4.375 0 0 1 7.875 6M9.75 2.5h4.5A1.75 1.75 0 0 1 16 4.25A1.75 1.75 0 0 1 14.25 6h-4.5A1.75 1.75 0 0 1 8 4.25A1.75 1.75 0 0 1 9.75 2.5M7.5 10h.01M13 9.5h.01M10 14h.01m6.49-1h.01M7.5 18h.01M14 18h.01");
}
</style><path class="yfj7djkmu"/>`,
		"fallback": "uix:gas-state",
	});
}

export default Component;
