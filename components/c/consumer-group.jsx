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
		"content": `<style>.socbl2b3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m10 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 18c0-2.75 1.75-4.5 4-4.5s4 1.75 4 4.5m2.004-.235C13.101 15.151 14.815 13.5 17 13.5c.519 0 1.011.093 1.462.27M21.5 19h-6m2.5-2.5L15.5 19l2.5 2.5");
}
</style><path class="socbl2b3c"/>`,
		"fallback": "uix:consumer-group",
	});
}

export default Component;
