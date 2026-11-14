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
		"content": `<style>.g_2-oguln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.25 11.75a2.75 2.75 0 1 1 5-1.5c0 6-2.75 9.5-8.25 9.5c-5 0-8-2.5-8-6.5m12-9h.01m2.99 0h.01");
}
</style><path class="g_2-oguln"/>`,
		"fallback": "uix:arabic-script",
	});
}

export default Component;
