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
		"content": `<style>.x-8ty2b8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 7.5a3.5 3.5 0 0 1 5 5L5.75 19.75a1.5 1.5 0 0 0-1.5-1.5Zm5 0L16 3.25m.5 4.25L20 3.75M16.5 7.5l4.25.5");
}
</style><path class="x-8ty2b8t"/>`,
		"fallback": "uix:carrot-treat",
	});
}

export default Component;
