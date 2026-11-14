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

.nzlyfxbwl {
  d: path("M10 12.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.zsr422p-y {
  d: path("M4.5 7.5h15C19.5 4 15.5 3 12 3S4.5 4 4.5 7.5m2 0v11h11v-11m-9 11v3h7v-3");
}
</style><g class="hntgybcog"><path class="zsr422p-y"/><path class="nzlyfxbwl"/></g>`,
		"fallback": "uix:bin-street",
	});
}

export default Component;
