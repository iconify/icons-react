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
		"content": `<style>.x0f7uum-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12h7c2 0 3 2 5 2h4v3h-4c-2 0-3 2-5 2h-7a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2M6 6l12.5 5.5M5 8.25l2-4.5M6 6L2.5 4.5");
}
</style><path class="x0f7uum-e"/>`,
		"fallback": "uix:champagne-saber",
	});
}

export default Component;
