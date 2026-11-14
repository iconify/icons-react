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
		"content": `<style>.p2l9sb2qu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 20.5c0-3.75 3.25-6 7.5-6c1.427 0 2.74.253 3.857.732M14.75 18l2 2L21 15.75");
}
</style><path class="p2l9sb2qu"/>`,
		"fallback": "uix:assignee",
	});
}

export default Component;
