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
		"content": `<style>.gts5f5caf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 14V2.5M7.75 4.75L10 2.5l2.25 2.25M10 14h11m-2.5-2.5L21 14l-2.5 2.5M10 14l-6 6m0-3.5V20h3.5m6.875-12za1.375 1.375 0 0 1 1.375 1.375a1.375 1.375 0 0 1-1.375 1.375A1.375 1.375 0 0 1 13 9.375A1.375 1.375 0 0 1 14.375 8");
}
</style><path class="gts5f5caf"/>`,
		"fallback": "uix:gizmo-move",
	});
}

export default Component;
