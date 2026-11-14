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
		"content": `<style>.ypa9a6b_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12zA1.25 1.25 0 0 1 5 13.25v7a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25v-7A1.25 1.25 0 0 1 3.75 12m16.5 0za1.25 1.25 0 0 1 1.25 1.25v7a1.25 1.25 0 0 1-1.25 1.25A1.25 1.25 0 0 1 19 20.25v-7A1.25 1.25 0 0 1 20.25 12M5 13.75h14m-14 6h14M12 2.5c1.5 2 3.25 3.25 3.25 5.25a3.25 3.25 0 0 1-6.5 0c0-1.25.75-2.25 1.5-2.75c.25 1 .75 1.5 1.25 1.75c-.25-1.5 0-3 .5-4.25");
}
</style><path class="ypa9a6b_q"/>`,
		"fallback": "uix:gas-pipe-yellow",
	});
}

export default Component;
