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
		"content": `<style>.n8eq7-bfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4v6m18-6v6M3 7h18M5 5L3 7l2 2m14-4l2 2l-2 2M7.625 13h8.75A2.625 2.625 0 0 1 19 15.625v2.75A2.625 2.625 0 0 1 16.375 21h-8.75A2.625 2.625 0 0 1 5 18.375v-2.75A2.625 2.625 0 0 1 7.625 13");
}
</style><path class="n8eq7-bfx"/>`,
		"fallback": "uix:dimension-line",
	});
}

export default Component;
