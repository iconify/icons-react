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
		"content": `<style>.e08h84zuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 5.5a8 8 0 0 1 5.5 0C15.25 3 19 4.75 17.25 8a8 8 0 0 1 1.5 3.75c2.5 1.25 2.25 5.75-1.25 6A8 8 0 1 1 4.75 8c-1.75-3.25 2-5 3.5-2.5m.25 6h.01m4.99 0h.01");
}
</style><path class="e08h84zuq"/>`,
		"fallback": "uix:hamster",
	});
}

export default Component;
