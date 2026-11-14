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
		"content": `<style>.q1q66pbeq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0M7 20c0-4 2.25-6 5-6s5 2 5 6M2.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 8.5c0-2.5.75-3.5 2-3.75m13-4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 8.5c0-2.5-.75-3.5-2-3.75");
}
</style><path class="q1q66pbeq"/>`,
		"fallback": "uix:citizen-group",
	});
}

export default Component;
