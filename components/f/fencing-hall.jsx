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
		"content": `<style>.ser7bwb-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20 2.5l-12 12m-4-12l11 11m-6-2l2 2m2 0l2-2m-.273 6.055l2.25-2.1a1.5 1.5 0 0 1 2.046 0l2.25 2.1a1.5 1.5 0 0 1 .477 1.097v1.598a1.5 1.5 0 0 1-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5v-1.598a1.5 1.5 0 0 1 .477-1.097");
}
</style><path class="ser7bwb-a"/>`,
		"fallback": "uix:fencing-hall",
	});
}

export default Component;
