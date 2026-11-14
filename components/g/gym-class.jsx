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
		"content": `<style>.r891rvbxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12h10M5.5 7zA1.5 1.5 0 0 1 7 8.5v7A1.5 1.5 0 0 1 5.5 17A1.5 1.5 0 0 1 4 15.5v-7A1.5 1.5 0 0 1 5.5 7m13 0zA1.5 1.5 0 0 1 20 8.5v7a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 18.5 7m-16 5H4m16 0h1.5");
}
</style><path class="r891rvbxq"/>`,
		"fallback": "uix:gym-class",
	});
}

export default Component;
