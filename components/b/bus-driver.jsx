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
		"content": `<style>.e0_9-cbcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5V8a3.5 3.5 0 0 0 7 0V6.5m-8.5 0H16m-9 0v-1a3.5 3 0 0 1 7 0v1m-11 14c0-3.5 3.25-6 7.5-6c.732 0 1.434.074 2.096.215M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m0 0h7M18 18v3.5");
}
</style><path class="e0_9-cbcr"/>`,
		"fallback": "uix:bus-driver",
	});
}

export default Component;
