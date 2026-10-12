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
		"content": `<style>.eqq6hubwb {
  d: path("M3.25 20.75c0-3.5 2.8-6.25 6.25-6.25c.9 0 1.75.17 2.5.5");
}

.hk4_ptb-x {
  cx: 17.5px;
  cy: 17.5px;
  r: 3.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v2el3udsi {
  cx: 9.5px;
  cy: 7.5px;
  r: 3.75px;
}

.ypu6wob8i {
  d: path("m14.85 14.85l5.3 5.3");
}
</style><g class="hntgybcog"><circle class="v2el3udsi"/><path class="eqq6hubwb"/><circle class="hk4_ptb-x"/><path class="ypu6wob8i"/></g>`,
		"fallback": "iconoven:block-bubble",
	});
}

export default Component;
