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
		"content": `<style>.pjbb77b8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5Q6 7 17 3m0 0v8m0 0c2.75 1.5 3 5.5 0 8l2.5 2.5h-5L17 19c-3-2.5-2.75-6.5 0-8");
}
</style><path class="pjbb77b8t"/>`,
		"fallback": "uix:genre-fishing-game",
	});
}

export default Component;
