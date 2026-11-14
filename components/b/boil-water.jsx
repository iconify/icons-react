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
		"content": `<style>.t3onrbbsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h18M5 9v7a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 16V9M7 21.5h10M9.5 6.25q-1-1 0-2t0-2m5 4q-1-1 0-2t0-2");
}
</style><path class="t3onrbbsy"/>`,
		"fallback": "uix:boil-water",
	});
}

export default Component;
