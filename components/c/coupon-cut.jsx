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
		"content": `<style>.ognap7bhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19v3a2 2 0 0 0 0 4v3h-19v-3a2 2 0 0 0 0-4Zm12.5 0V4m0 2.75v1.5M15 11v1.5m-1 7.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-3.25-1l3.5-4m.25 4l-3.5-4");
}
</style><path class="ognap7bhp"/>`,
		"fallback": "uix:coupon-cut",
	});
}

export default Component;
