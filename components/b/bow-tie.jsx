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
		"content": `<style>.z5z21zbft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 10L4 6.5c-1-.5-1.5 0-1.5 1v9c0 1 .5 1.5 1.5 1l6-3.5m4-4l6-3.5c1-.5 1.5 0 1.5 1v9c0 1-.5 1.5-1.5 1L14 14m-2.25-4.5h.5A1.75 1.75 0 0 1 14 11.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 10 12.75v-1.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="z5z21zbft"/>`,
		"fallback": "uix:bow-tie",
	});
}

export default Component;
