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
		"content": `<style>.ftknhslzi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h3m1-4v3m14 1h-3m-1-4v3M3 17h3m1 4v-3m14-1h-3m-1 4v-3");
}
</style><path class="ftknhslzi"/>`,
		"fallback": "uix:crop-free",
	});
}

export default Component;
