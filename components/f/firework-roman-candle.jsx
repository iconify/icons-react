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
		"content": `<style>.ovcwbbcth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 12.5h2.5A1.75 1.75 0 0 1 15 14.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 19.75v-5.5a1.75 1.75 0 0 1 1.75-1.75m1.25 0q0-2 1.5-2.5M9 8L5.5 3M12 7V2.5M15.5 8L19 3");
}
</style><path class="ovcwbbcth"/>`,
		"fallback": "uix:firework-roman-candle",
	});
}

export default Component;
