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
		"content": `<style>.wyk846jdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.527 3.5h8.946a1.75 1.75 0 0 1 1.279 2.944l-3.733 4A1.75 1.75 0 0 1 12.74 11h-1.48a1.75 1.75 0 0 1-1.279-.556l-3.733-4A1.75 1.75 0 0 1 7.527 3.5m2.973 11l-5 5m0-4v4h4m4-5l5 5m-4 0h4v-4");
}
</style><path class="wyk846jdq"/>`,
		"fallback": "uix:funnel-split",
	});
}

export default Component;
