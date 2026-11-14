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
		"content": `<style>.d_rlavbbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h1.75A2.625 2.625 0 0 1 10 5.625v1.75A2.625 2.625 0 0 1 7.375 10h-1.75A2.625 2.625 0 0 1 3 7.375v-1.75A2.625 2.625 0 0 1 5.625 3m11 0h1.75A2.625 2.625 0 0 1 21 5.625v1.75A2.625 2.625 0 0 1 18.375 10h-1.75A2.625 2.625 0 0 1 14 7.375v-1.75A2.625 2.625 0 0 1 16.625 3m-11 11h1.75A2.625 2.625 0 0 1 10 16.625v1.75A2.625 2.625 0 0 1 7.375 21h-1.75A2.625 2.625 0 0 1 3 18.375v-1.75A2.625 2.625 0 0 1 5.625 14M6.5 6.5h.01m10.99 0h.01M6.5 17.5h.01m8.24.5l2 2L21 15.75");
}
</style><path class="d_rlavbbe"/>`,
		"fallback": "uix:check-in-qr",
	});
}

export default Component;
