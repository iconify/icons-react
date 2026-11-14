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
		"content": `<style>.zzhqbvbqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.782 6.374za1.5 1.5 0 0 1 .963 1.89l-2.781 8.559a1.5 1.5 0 0 1-1.891.963a1.5 1.5 0 0 1-.963-1.89l2.782-8.559a1.5 1.5 0 0 1 1.89-.963M13.5 6.25za1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5m6 0za1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5M4.501 11.617l2.853.927M12 12.25h3m3 0h3");
}
</style><path class="zzhqbvbqb"/>`,
		"fallback": "uix:domino-chain",
	});
}

export default Component;
