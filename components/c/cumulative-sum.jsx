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
		"content": `<style>.qdbg22bba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 3.5H5l6.5 8l-6.5 8h8.084m4.916 2v-7m-3 3l3-3l3 3");
}
</style><path class="qdbg22bba"/>`,
		"fallback": "uix:cumulative-sum",
	});
}

export default Component;
