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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcrqayb4g {
  d: path("M2.75 13.75a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.wdabovbsb {
  d: path("M6 13.75a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M18.75 2.5q0 2.75 2.75 2.75q-2.75 0-2.75 2.75q0-2.75-2.75-2.75q2.75 0 2.75-2.75");
}
</style><g class="hntgybcog"><path class="vcrqayb4g"/><path class="wdabovbsb"/></g>`,
		"fallback": "uix:collectible",
	});
}

export default Component;
