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
		"content": `<style>.yrjh4_b5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19v-4c0-3.5 2-5 6.5-5s6.5 1.5 6.5 5v4m-9-9V6.5A1.5 1.5 0 0 1 8.5 5H14M2.5 19h19m-2-5v5");
}
</style><path class="yrjh4_b5v"/>`,
		"fallback": "uix-sharp:curling-hack",
	});
}

export default Component;
