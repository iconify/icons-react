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

.k22izpe-i {
  d: path("M14 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8 3.5l2 2m3 0l3.75-4");
}

.qwsdz3b8v {
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.5-7a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}
</style><g class="hntgybcog"><path class="qwsdz3b8v"/><path class="k22izpe-i"/></g>`,
		"fallback": "uix:functional-group",
	});
}

export default Component;
