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
		"content": `<style>.g-nbkfezd {
  d: path("M5.25 2.5h7.5a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-7.5A1.75 1.75 0 0 1 3.5 6.75v-2.5A1.75 1.75 0 0 1 5.25 2.5M3 11.25h11.5m-9 0L13 16.5m0-5.25L5.5 16.5m-3 0h19V13l-2-2.5h-2v6");
}

.gnflflb_q {
  d: path("M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g-nbkfezd"/><path class="gnflflb_q"/></g>`,
		"fallback": "uix:container-loader",
	});
}

export default Component;
