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
		"content": `<style>.kbljtodkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 5.5l3.65-2.028a1.75 1.75 0 0 1 1.7 0L16.5 5.5a1.334 1.334 0 0 1-.648 2.5H8.148A1.334 1.334 0 0 1 7.5 5.5m-2 9.5L7 11h10l1.5 4M6.25 15h11.5A2.25 2.25 0 0 1 20 17.25a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 17.25A2.25 2.25 0 0 1 6.25 15m.25 4.5v2m11-2v2M7 17.25h.01m9.99 0h.01");
}
</style><path class="kbljtodkc"/>`,
		"fallback": "uix:bank-drive-through",
	});
}

export default Component;
