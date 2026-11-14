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
		"content": `<style>.d-zj64ban {
  d: path("m4.092 9.978l6.75-5.956a1.75 1.75 0 0 1 2.316 0l6.75 5.956a1.75 1.75 0 0 1 .592 1.312v7.46a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-7.46a1.75 1.75 0 0 1 .592-1.312");
}

.h6ecm1b1f {
  d: path("M8.25 13.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m4.75 2l2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d-zj64ban"/><path class="h6ecm1b1f"/></g>`,
		"fallback": "uix:home-search",
	});
}

export default Component;
