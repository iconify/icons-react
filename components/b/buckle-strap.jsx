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
		"content": `<style>.t6rfa-bnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.125 5.5h.75A2.625 2.625 0 0 1 13.5 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625h-.75A2.625 2.625 0 0 1 7.5 15.875v-7.75A2.625 2.625 0 0 1 10.125 5.5M7.5 9.5h-5v5h5m6-5H19l2.5 2.5l-2.5 2.5h-5.5m-3-9v13");
}
</style><path class="t6rfa-bnu"/>`,
		"fallback": "uix:buckle-strap",
	});
}

export default Component;
