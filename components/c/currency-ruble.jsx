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
		"content": `<style>.dmyq_4x2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 19.5v-15h4.5c2.4 0 4 1.6 4 4s-1.6 4-4 4h-7m0 3.5H14");
}
</style><path class="dmyq_4x2m"/>`,
		"fallback": "uix:currency-ruble",
	});
}

export default Component;
