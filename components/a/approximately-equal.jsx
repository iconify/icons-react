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
		"content": `<style>.j1f-uv_2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.5c2.5-2.25 4.5-2.25 7 0s4.5 2.25 7 0m-14 5c2.5-2.25 4.5-2.25 7 0s4.5 2.25 7 0");
}
</style><path class="j1f-uv_2y"/>`,
		"fallback": "uix:approximately-equal",
	});
}

export default Component;
