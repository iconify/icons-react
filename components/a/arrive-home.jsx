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
		"content": `<style>.e6cvfq3zf {
  d: path("M10 12.5V11l5.5-5l5.5 5v9H10v-1.5m-7.5-3h11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pflefjb-l {
  d: path("m11.25 13.25l2.25 2.25l-2.25 2.25");
}
</style><g class="hntgybcog"><path class="e6cvfq3zf"/><path class="pflefjb-l"/></g>`,
		"fallback": "uix:arrive-home",
	});
}

export default Component;
