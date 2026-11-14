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
		"content": `<style>.n45h7ybtq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 9.25h7a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 18v-5.25a3.5 3.5 0 0 1 3.5-3.5M5 12h14M5 18.75h14M13 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2 4.75L13.75 6");
}
</style><path class="n45h7ybtq"/>`,
		"fallback": "uix:can-ring-pull",
	});
}

export default Component;
