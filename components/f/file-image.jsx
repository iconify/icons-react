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
		"content": `<style>.f58h5eznk {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M13 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-5.5 6.5l3-3.5l2 2l1.25-1.25l2.75 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="f58h5eznk"/></g>`,
		"fallback": "uix:file-image",
	});
}

export default Component;
