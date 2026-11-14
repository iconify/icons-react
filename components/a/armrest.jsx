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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgttwt-2k {
  d: path("M7 9h4.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 7 9");
}

.vsgne2blx {
  d: path("M14.5 2.5H18A1.5 1.5 0 0 1 19.5 4l-1 15a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19v-2.5A1.5 1.5 0 0 1 5 15h8V4a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="vsgne2blx"/><path class="jgttwt-2k"/></g>`,
		"fallback": "uix:armrest",
	});
}

export default Component;
