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
		"content": `<style>.w6p688b8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21.5L8 7.5l3.5 14M8 7.5v-3m-1.5 9h3m-4 4h5m-5.964-11a4 4 0 0 1 0-4m6.928 0a4 4 0 0 1 0 4m4.036 9h4a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1m5 1.5h1v1.5h-1");
}
</style><path class="w6p688b8n"/>`,
		"fallback": "uix:cell-tower-battery",
	});
}

export default Component;
