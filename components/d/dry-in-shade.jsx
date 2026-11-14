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
		"content": `<style>.foos7_q4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-9 0v4m-2.5 1l-5 2.5l1.25 3l1.75-.75v5.25h9v-5.25l1.75.75l1.25-3l-5-2.5a2.5 2.5 0 0 1-5 0");
}
</style><path class="foos7_q4t"/>`,
		"fallback": "uix:dry-in-shade",
	});
}

export default Component;
