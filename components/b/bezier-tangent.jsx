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
		"content": `<style>.qvp_162gt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 14.25a6 6 0 1 0 12 0a6 6 0 1 0-12 0M8 4l12 12m-6-6h.01");
}
</style><path class="qvp_162gt"/>`,
		"fallback": "uix:bezier-tangent",
	});
}

export default Component;
