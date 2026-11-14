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
		"content": `<style>.dah32bcba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.125 3h9.75A2.625 2.625 0 0 1 18.5 5.625v5a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 3.5 10.625v-5A2.625 2.625 0 0 1 6.125 3M2.5 16.5h11.1m5.15-.5v5.5m-2.5-4.25l5 3m-5 0l5-3");
}
</style><path class="dah32bcba"/>`,
		"fallback": "uix:device-cooling-down",
	});
}

export default Component;
