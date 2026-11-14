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

.j2vtdjb2b {
  d: path("M2.5 9L12 3l9.5 6Zm2 0v12m15-12v12m-15-9.5q7.5 6.5 15 0");
}

.ugz14flvn {
  fill: currentColor;
  d: path("M7.25 15.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0M11 16a1 1 0 1 0 2 0a1 1 0 1 0-2 0m3.75-.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="j2vtdjb2b"/><path class="ugz14flvn"/></g>`,
		"fallback": "uix:gazebo-lights",
	});
}

export default Component;
