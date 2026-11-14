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

.it94bxv6t {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 8l1.5 1.5L11 7");
}

.zvbvu8bkv {
  d: path("M5.125 5.5h6.75A2.625 2.625 0 0 1 14.5 8.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 2.5 13.875v-5.75A2.625 2.625 0 0 1 5.125 5.5m9.375 3h4l3 3.5v4.5h-7");
}
</style><g class="hntgybcog"><path class="zvbvu8bkv"/><path class="it94bxv6t"/></g>`,
		"fallback": "uix:carrier-selection",
	});
}

export default Component;
