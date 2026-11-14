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
		"content": `<style>.g-e99mbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c5 0 6-10 9.5-10s4.5 10 9.5 10m-5-10V12m0 2.5V16m0 2.5v2m-2-16a2 2 0 1 1 3 1.75c-.75.5-1 .75-1 1.5m0 2h.01");
}
</style><path class="g-e99mbek"/>`,
		"fallback": "uix:hypothesis-test",
	});
}

export default Component;
