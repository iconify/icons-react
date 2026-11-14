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
		"content": `<style>.miwobabrk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m17 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M2 19a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m17 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M7.75 5h2.75m3 0h2.75m-8.5 14h2.75m3 0h2.75M3.5 9.25v5.5m17-5.5v5.5");
}
</style><path class="miwobabrk"/>`,
		"fallback": "uix:field-boundary",
	});
}

export default Component;
