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
		"content": `<style>.n8odybbkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.75H11a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5H6.5a3.5 3.5 0 0 1-3.5-3.5v-6a3.5 3.5 0 0 1 3.5-3.5m-.75-3.5h6A1.75 1.75 0 0 1 13.5 6a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 4 6a1.75 1.75 0 0 1 1.75-1.75M3 12h11.5M3 16.5h11.5m3 4.25l2-10.5M18 7a1.75 3 0 1 0 3.5 0A1.75 3 0 1 0 18 7");
}
</style><path class="n8odybbkz"/>`,
		"fallback": "uix:baby-food",
	});
}

export default Component;
