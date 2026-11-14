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
		"content": `<style>.vsqd6swpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h2.75A2.625 2.625 0 0 1 11 5.625v13.25A2.625 2.625 0 0 1 8.375 21.5h-2.75A2.625 2.625 0 0 1 3 18.875V5.625A2.625 2.625 0 0 1 5.625 3m10.75 0h2A2.625 2.625 0 0 1 21 5.625v3.25a2.625 2.625 0 0 1-2.625 2.625h-2a2.625 2.625 0 0 1-2.625-2.625v-3.25A2.625 2.625 0 0 1 16.375 3M15 16.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}
</style><path class="vsqd6swpd"/>`,
		"fallback": "uix:changeover",
	});
}

export default Component;
