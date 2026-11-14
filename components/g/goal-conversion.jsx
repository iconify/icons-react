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
		"content": `<style>.qsv_dmb9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4c2.5-1.25 4.5 1.25 7 0s4.5 1.25 7 0v8.5c-2.5 1.25-4.5-1.25-7 0s-4.5-1.25-7 0M5 3v18.5m9.5-3.5l2.5 2.5l4.5-5");
}
</style><path class="qsv_dmb9g"/>`,
		"fallback": "uix:goal-conversion",
	});
}

export default Component;
