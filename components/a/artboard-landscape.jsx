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
		"content": `<style>.dflydfbuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 7.5h13.75a2.625 2.625 0 0 1 2.625 2.625v6.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 16.875v-6.75A2.625 2.625 0 0 1 5.125 7.5M2.5 4.75H9");
}
</style><path class="dflydfbuq"/>`,
		"fallback": "uix:artboard-landscape",
	});
}

export default Component;
