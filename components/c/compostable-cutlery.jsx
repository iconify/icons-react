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
		"content": `<style>.zavu73bgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5V7a3 3 0 0 0 6 0V2.5M6 10v11.5m0-19V7m6-.5a3 4 0 1 0 6 0a3 4 0 1 0-6 0m4 3.75v3.4m-.5 7.85c0-4.5 2-6.5 6-6.5c0 4.5-2 6.5-6 6.5m0 0l3.25-3.25");
}
</style><path class="zavu73bgq"/>`,
		"fallback": "uix:compostable-cutlery",
	});
}

export default Component;
