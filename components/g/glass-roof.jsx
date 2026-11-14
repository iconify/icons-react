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

.i46sb_buq {
  d: path("M2.5 13v6h15v-6m-6-8l-4 8m9-8l-4 8m-8-4h15");
}

.i7wiwtbvv {
  d: path("m3.585 10.829l2.5-5A1.5 1.5 0 0 1 7.427 5h11.646a1.5 1.5 0 0 1 1.342 2.171l-2.5 5a1.5 1.5 0 0 1-1.342.829H4.927a1.5 1.5 0 0 1-1.342-2.171");
}
</style><g class="hntgybcog"><path class="i7wiwtbvv"/><path class="i46sb_buq"/></g>`,
		"fallback": "uix:glass-roof",
	});
}

export default Component;
