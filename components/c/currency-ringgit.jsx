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
		"content": `<style>.c6ml3kpdh {
  d: path("M7.25 16V8H8.5a1.75 1.75 0 0 1 0 3.5H7.25m2 0l1 4.5m3.5 0V8l1.5 2.25L16.75 8v8");
}

.dbgvcxwad {
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
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="c6ml3kpdh"/></g>`,
		"fallback": "iconoven:currency-ringgit",
	});
}

export default Component;
