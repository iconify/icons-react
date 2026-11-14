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

.qvu8j6byn {
  d: path("M12 10v3l2 1.5m-9.5-8l3-3m12 3l-3-3M3.39 17.015a9.5 9.5 0 0 1 0-8.03m17.22 0a9.5 9.5 0 0 1 0 8.03M7.75 18.25l-1.5 2.25m10-2.25l1.5 2.25");
}

.zrg012bhi {
  d: path("M5.5 13a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="zrg012bhi"/><path class="qvu8j6byn"/></g>`,
		"fallback": "uix:alarm-ring",
	});
}

export default Component;
