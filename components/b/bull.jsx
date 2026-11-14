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
		"content": `<style>.tmpzdcaym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 14.5L7 7h10l-1.5 7.5M7 7C4.5 7 2.5 5.5 2.5 3M17 7c2.5 0 4.5-1.5 4.5-4M9.75 14.5h4.5a3.25 3.25 0 0 1 3.25 3.25A3.25 3.25 0 0 1 14.25 21h-4.5a3.25 3.25 0 0 1-3.25-3.25a3.25 3.25 0 0 1 3.25-3.25m.25 3.25h.01m3.99 0h.01");
}
</style><path class="tmpzdcaym"/>`,
		"fallback": "uix:bull",
	});
}

export default Component;
