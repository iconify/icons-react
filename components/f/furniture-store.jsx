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
		"content": `<style>.ldiwm_b5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M6.5 15v-2A1.5 1.5 0 0 1 8 11.5h8a1.5 1.5 0 0 1 1.5 1.5v2M5.25 15zA1.75 1.75 0 0 1 7 16.75v1a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 5.25 15m13.5 0za1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75A1.75 1.75 0 0 1 17 17.75v-1A1.75 1.75 0 0 1 18.75 15M7 17h10M5.25 19.5v2m13.5-2v2");
}
</style><path class="ldiwm_b5g"/>`,
		"fallback": "uix:furniture-store",
	});
}

export default Component;
