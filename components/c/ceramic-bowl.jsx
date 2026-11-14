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
		"content": `<style>.j5tup-bju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5h15c0 4.5-3 7-6 7h-3c-3 0-6-2.5-6-7M4 12h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 15H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 12m8 3v4.5m-4.5 0h9");
}
</style><path class="j5tup-bju"/>`,
		"fallback": "uix:ceramic-bowl",
	});
}

export default Component;
