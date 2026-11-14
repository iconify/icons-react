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

.lwk_bl73s {
  d: path("M7 20q4.5-7 9 0");
}

.ueha0eb4e {
  d: path("M11.5 16.5Q11 11 14 6.5m0 0q-4.5-3-9 1m9-1q4.5-3 7.5.5M14 6.5Q18 8 19 12M2.5 20q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><g class="hntgybcog"><path class="lwk_bl73s"/><path class="ueha0eb4e"/></g>`,
		"fallback": "uix:desert-island",
	});
}

export default Component;
