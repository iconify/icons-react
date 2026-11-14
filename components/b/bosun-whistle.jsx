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

.m25hqbb9k {
  d: path("M2.5 8H14a6 6 0 1 1-6 6v-3H2.5Z");
}

.xbhe_sbgv {
  d: path("M15.75 6.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M14 14h.01");
}
</style><g class="hntgybcog"><path class="m25hqbb9k"/><path class="xbhe_sbgv"/></g>`,
		"fallback": "uix:bosun-whistle",
	});
}

export default Component;
