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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i_vqp9bgw {
  d: path("M5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.vjfrc2brd {
  d: path("M2.5 12C5 4 17 4 19.5 12C17 20 5 20 2.5 12m17 0q1.5-1.5 2-4");
}
</style><g class="hntgybcog"><path class="vjfrc2brd"/><path class="i_vqp9bgw"/></g>`,
		"fallback": "uix:allergen-soy",
	});
}

export default Component;
