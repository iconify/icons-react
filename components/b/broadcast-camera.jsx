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

.xwaqbm3nj {
  d: path("m5.091 5.11l-.841-.36A1.255 1.255 0 0 0 2.5 5.904v4.192a1.255 1.255 0 0 0 1.75 1.154l.841-.36A1.5 1.5 0 0 0 6 9.511V6.489a1.5 1.5 0 0 0-.909-1.379M17 10.5l4 4m-9.5-2v8m-4 0h8");
}

.yp-x07fin {
  d: path("M8.625 3.5h5.75A2.625 2.625 0 0 1 17 6.125v3.75a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 6 9.875v-3.75A2.625 2.625 0 0 1 8.625 3.5");
}
</style><g class="hntgybcog"><path class="yp-x07fin"/><path class="xwaqbm3nj"/></g>`,
		"fallback": "uix:broadcast-camera",
	});
}

export default Component;
