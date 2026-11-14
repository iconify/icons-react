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
		"content": `<style>.k5mjk_b_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5v13m6-13v13M2.5 6h13m-13 6h13m2.5 3v6m-3-3h6");
}
</style><path class="k5mjk_b_d"/>`,
		"fallback": "uix:frame-plus",
	});
}

export default Component;
