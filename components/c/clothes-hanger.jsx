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
		"content": `<style>.h5tys9l_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 7.5A2.25 2.25 0 1 1 12 9.75V12m1.655.845L16 14.75A1.83 1.83 0 0 1 14.846 18H9.154A1.83 1.83 0 0 1 8 14.75l2.345-1.905a2.625 2.625 0 0 1 3.31 0");
}
</style><path class="h5tys9l_r"/>`,
		"fallback": "uix:clothes-hanger",
	});
}

export default Component;
