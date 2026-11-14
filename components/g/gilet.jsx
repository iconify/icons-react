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
		"content": `<style>.m0353xdan {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.5v18h-5A1.5 1.5 0 0 1 4 19v-8.5c2-1 3-3 3-6.5Zm3 0v18h5A1.5 1.5 0 0 0 20 19v-8.5c-2-1-3-3-3-6.5ZM4 12.5h6.5m-6.5 4h6.5m3-4H20m-6.5 4H20");
}
</style><path class="m0353xdan"/>`,
		"fallback": "uix:gilet",
	});
}

export default Component;
