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
		"content": `<style>.cwj_9hb3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.125 9h5.75a2.625 2.625 0 0 1 2.625 2.625v1.75A2.625 2.625 0 0 1 14.875 16h-5.75A2.625 2.625 0 0 1 6.5 13.375v-1.75A2.625 2.625 0 0 1 9.125 9M3 20.5L5 19l2 1.5L9 19l2 1.5l2-1.5l2 1.5l2-1.5l2 1.5l2-1.5M18 4.25H6m2-2l-2 2l2 2");
}
</style><path class="cwj_9hb3o"/>`,
		"fallback": "uix:friction",
	});
}

export default Component;
