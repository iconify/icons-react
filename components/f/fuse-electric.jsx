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
		"content": `<style>.i-2wwvboz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.625 8.5h6.75A2.625 2.625 0 0 1 18 11.125v1.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 6 12.875v-1.75A2.625 2.625 0 0 1 8.625 8.5M2.5 12h19");
}
</style><path class="i-2wwvboz"/>`,
		"fallback": "uix:fuse-electric",
	});
}

export default Component;
