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
		"content": `<style>.oi04c36oq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m9.5 0h.01M16 12h.01M14 15.5h.01m-4.01 0h.01M8 12h.01M10 8.5h.01m3.99 0h.01");
}
</style><path class="oi04c36oq"/>`,
		"fallback": "uix:golf-ball-dimples",
	});
}

export default Component;
