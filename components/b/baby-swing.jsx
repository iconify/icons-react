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

.o4l76u8qr {
  d: path("M7.5 13.5h9m-8 0V15a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5v-1.5");
}

.wn9hnc6gn {
  d: path("M2.5 21.5L6 3.5h12l3.5 18m-13-18v10m7-10v10");
}
</style><g class="hntgybcog"><path class="wn9hnc6gn"/><path class="o4l76u8qr"/></g>`,
		"fallback": "uix:baby-swing",
	});
}

export default Component;
