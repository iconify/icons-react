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
		"content": `<style>.a526e168u {
  fill: currentColor;
  d: path("M8.25 10.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.td0ci9bvr {
  d: path("M5.5 10a9.5 4 0 1 0 13 0");
}
</style><g class="hntgybcog"><path class="a526e168u"/><path class="td0ci9bvr"/></g>`,
		"fallback": "uix:black-hole-disc",
	});
}

export default Component;
