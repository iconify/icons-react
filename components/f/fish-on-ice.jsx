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
		"content": `<style>.k6x7mwpli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9c2.5-4 6-5.5 9.5-5.5S18 6 18 9s-2 5.5-5.5 5.5S5.5 13 3 9m15 0l3.5-3.5v7ZM7.5 8h.01M5.5 17.5h1A1.5 1.5 0 0 1 8 19v.5A1.5 1.5 0 0 1 6.5 21h-1A1.5 1.5 0 0 1 4 19.5V19a1.5 1.5 0 0 1 1.5-1.5m6 0h1A1.5 1.5 0 0 1 14 19v.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V19a1.5 1.5 0 0 1 1.5-1.5m6 0h1A1.5 1.5 0 0 1 20 19v.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V19a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="k6x7mwpli"/>`,
		"fallback": "uix:fish-on-ice",
	});
}

export default Component;
