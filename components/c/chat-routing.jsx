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

.m6kkv_bev {
  d: path("M2.5 7.5A2.5 2.5 0 0 1 5 5h6a2.5 2.5 0 0 1 2.5 2.5V13a2.5 2.5 0 0 1-2.5 2.5H8.5l-3 3v-3H5A2.5 2.5 0 0 1 2.5 13Zm11 2.5h3l4-4m-4 4l4 4");
}

.rnbphpbjs {
  d: path("M18 6h2.5v2.5m0 3V14H18");
}
</style><g class="hntgybcog"><path class="m6kkv_bev"/><path class="rnbphpbjs"/></g>`,
		"fallback": "uix:chat-routing",
	});
}

export default Component;
