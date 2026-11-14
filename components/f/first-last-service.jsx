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
		"content": `<style>.mmpka0bqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.75h19m-18.75 0a3.75 3.75 0 0 1 7.5 0m3.5 0a3.75 3.75 0 0 1 7.5 0M6.5 11V6.25m-2 2l2-2l2 2m9-2V11m-2-2l2 2l2-2");
}
</style><path class="mmpka0bqf"/>`,
		"fallback": "uix:first-last-service",
	});
}

export default Component;
