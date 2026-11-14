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
		"content": `<style>.zqwj9pb1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 9H11a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H8.5A3.5 3.5 0 0 1 5 18v-5.5A3.5 3.5 0 0 1 8.5 9M7 9l1.5-3H11l1.5 3M9.75 6V3.5h2.75m3.25 0h.01M19 3h.01M18 6.25h.01");
}
</style><path class="zqwj9pb1h"/>`,
		"fallback": "uix:dry-shampoo",
	});
}

export default Component;
