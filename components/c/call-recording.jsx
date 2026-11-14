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

.txo8u9z5t {
  d: path("M17.5 2.5h-3L13 7l2 1.5C14 11 11 14 8.5 15L7 13l-4.5 1.5v3a2 2 0 0 0 2 2c8.5 0 15-6.5 15-15a2 2 0 0 0-2-2");
}

.wda8udb3v {
  fill: currentColor;
  d: path("M16.5 19.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="txo8u9z5t"/><path class="wda8udb3v"/></g>`,
		"fallback": "uix:call-recording",
	});
}

export default Component;
