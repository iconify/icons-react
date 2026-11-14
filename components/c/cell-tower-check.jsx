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

.qw_i9zbhr {
  d: path("M6 12.5h4L4.5 17h7M5.75 4A3 3 0 0 0 5 7m5.25-3A3 3 0 0 1 11 7m3.75 11l2 2L21 15.75");
}

.yyu2z-65g {
  d: path("m3 21.5l5-15l5 15");
}
</style><g class="hntgybcog"><path class="yyu2z-65g"/><path class="qw_i9zbhr"/></g>`,
		"fallback": "uix:cell-tower-check",
	});
}

export default Component;
