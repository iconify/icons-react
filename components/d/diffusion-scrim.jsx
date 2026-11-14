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
		"content": `<style>.z2r5y2bqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 2.5h7.5a1.75 1.75 0 0 1 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75v-9.5A1.75 1.75 0 0 1 8.25 2.5m.75 13l-2.5 6m8.5-6l2.5 6M3.5 5q-1.5 4 0 8m17-8q1.5 4 0 8");
}
</style><path class="z2r5y2bqf"/>`,
		"fallback": "uix:diffusion-scrim",
	});
}

export default Component;
