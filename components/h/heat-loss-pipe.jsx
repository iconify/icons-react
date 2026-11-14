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
		"content": `<style>.b_o0mk7rf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h7v6h-7m19-6h-7v6h7M10 11q-1-1.5 0-3t0-3m4 6q-1-1.5 0-3t0-3");
}
</style><path class="b_o0mk7rf"/>`,
		"fallback": "uix:heat-loss-pipe",
	});
}

export default Component;
