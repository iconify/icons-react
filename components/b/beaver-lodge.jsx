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

.r7l7y9bzh {
  d: path("M2.5 20c0-10.5 2.75-14 6-14s6 3.5 6 14ZM19 16.5h.75a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 20H19a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 19 16.5M5.5 2.5L11 7.25m.5-4.75L6 7.25");
}

.xjycnkbyz {
  d: path("M6.5 20v-3a2 2 0 0 1 4 0v3");
}
</style><g class="hntgybcog"><path class="r7l7y9bzh"/><path class="xjycnkbyz"/></g>`,
		"fallback": "uix:beaver-lodge",
	});
}

export default Component;
