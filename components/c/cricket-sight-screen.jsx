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
		"content": `<style>.yb-hy2b-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h13.75A2.625 2.625 0 0 1 21.5 5.125v6.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 11.875v-6.75A2.625 2.625 0 0 1 5.125 2.5M6 14.5v3m12-3v3m-14 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="yb-hy2b-p"/>`,
		"fallback": "uix:cricket-sight-screen",
	});
}

export default Component;
