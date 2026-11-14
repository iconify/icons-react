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
		"content": `<style>.hfpugv-2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.75h19c0 5.5-4 8.5-9.5 8.5s-9.5-3-9.5-8.5m11.75-6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M15 7l-4.75 4.75");
}
</style><path class="hfpugv-2v"/>`,
		"fallback": "uix:baby-bowl",
	});
}

export default Component;
