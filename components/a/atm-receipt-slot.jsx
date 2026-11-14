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
		"content": `<style>.prq8pqbpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5h15a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2a2 2 0 0 1 2-2m2 4v10a3 3 0 0 0 3 3H20a3 3 0 0 1-3-3v-10M9.5 11H14m-4.5 3.5H14");
}
</style><path class="prq8pqbpt"/>`,
		"fallback": "uix:atm-receipt-slot",
	});
}

export default Component;
