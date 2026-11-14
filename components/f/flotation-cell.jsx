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

.m4tjs_b3s {
  d: path("M3 8v10.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 12h18");
}

.v9ng7hwcq {
  d: path("M7.5 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.yxn89n9bw {
  d: path("M9.75 5.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="m4tjs_b3s"/><path class="v9ng7hwcq"/><path class="yxn89n9bw"/></g>`,
		"fallback": "uix:flotation-cell",
	});
}

export default Component;
