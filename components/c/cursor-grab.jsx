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
		"content": `<style>.v6lrnwbdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13.5v-5a1.5 1.5 0 0 1 3 0V6a1.5 1.5 0 0 1 3 0v.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1 3 0V15c0 3.6-2.4 6-5.5 6h-1c-1.9 0-3.2-.9-4.25-2.5L4 14.5a1.5 1.5 0 0 1 2-1m3-5v3m3-5v5m3-3v3");
}
</style><path class="v6lrnwbdz"/>`,
		"fallback": "uix:cursor-grab",
	});
}

export default Component;
