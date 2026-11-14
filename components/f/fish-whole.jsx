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
		"content": `<style>.emtnhxbpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12c2.5-4.5 6-6 9.5-6S18 9 18 12s-2 6-5.5 6s-7-1.5-9.5-6m15 0l3.5-3.5v7ZM7.5 11h.01");
}
</style><path class="emtnhxbpz"/>`,
		"fallback": "uix:fish-whole",
	});
}

export default Component;
