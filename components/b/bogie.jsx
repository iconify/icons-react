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
		"content": `<style>.kwo0qubbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.125 6.5h15.75A1.625 1.625 0 0 1 21.5 8.125a1.625 1.625 0 0 1-1.625 1.625H4.125A1.625 1.625 0 0 1 2.5 8.125A1.625 1.625 0 0 1 4.125 6.5M12 6.5v-3M3.5 16a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m10 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M7 16h.01M17 16h.01");
}
</style><path class="kwo0qubbs"/>`,
		"fallback": "uix:bogie",
	});
}

export default Component;
