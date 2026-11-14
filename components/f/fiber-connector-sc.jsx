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
		"content": `<style>.jb8wm1k2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.625 7h3.75A2.625 2.625 0 0 1 17 9.625v4.75A2.625 2.625 0 0 1 14.375 17h-3.75A2.625 2.625 0 0 1 8 14.375v-4.75A2.625 2.625 0 0 1 10.625 7m7.875 3.5h1A1.5 1.5 0 0 1 21 12a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 17 12a1.5 1.5 0 0 1 1.5-1.5M2.5 12H8");
}
</style><path class="jb8wm1k2n"/>`,
		"fallback": "uix:fiber-connector-sc",
	});
}

export default Component;
