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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i9w1-jodz {
  d: path("M7.75 10c.6-.75 1.9-.75 2.5 0m3.5 0c.6-.75 1.9-.75 2.5 0m-6.5 5c.65.65 1.35 1 2.25 1s1.6-.35 2.25-1M6 14.75l1-1.25m1 1.25l1-1.25m6 1.25l1-1.25m1 1.25l1-1.25");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="i9w1-jodz"/></g>`,
		"fallback": "iconoven:blush",
	});
}

export default Component;
