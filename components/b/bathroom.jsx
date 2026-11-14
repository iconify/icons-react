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
		"content": `<style>.my7zrkbjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7A1.5 1.5 0 0 1 17 4v4a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 8V4a1.5 1.5 0 0 1 1.5-1.5M3.5 15h17v1c0 3.5-4 5.5-8.5 5.5s-8.5-2-8.5-5.5Zm12 0v-2.25c0-1.25-2.5-1.25-3 0");
}
</style><path class="my7zrkbjd"/>`,
		"fallback": "uix:bathroom",
	});
}

export default Component;
