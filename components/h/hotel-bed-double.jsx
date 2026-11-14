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
		"content": `<style>.n-rg4xb8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19V9m18 10v-6H3m4-4h2a2 2 0 0 1 2 2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2a2 2 0 0 1 2-2m8 0h2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M3 17h18");
}
</style><path class="n-rg4xb8k"/>`,
		"fallback": "uix:hotel-bed-double",
	});
}

export default Component;
