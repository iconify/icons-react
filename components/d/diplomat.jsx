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
		"content": `<style>.cjgsw9bxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9h11a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-5A3.5 3.5 0 0 1 6.5 9M8 9V6.5A1.5 1.5 0 0 1 9.5 5h2A1.5 1.5 0 0 1 13 6.5V9M3 14h18m-4.5-5V2.5l4 2l-4 2");
}
</style><path class="cjgsw9bxs"/>`,
		"fallback": "uix:diplomat",
	});
}

export default Component;
