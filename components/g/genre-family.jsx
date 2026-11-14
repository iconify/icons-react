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
		"content": `<style>.stbe3eb-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 21.5v-9.75a2.5 2.5 0 0 1 5 0v9.75m9.25-16.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M16.5 21.5v-9.75a2.5 2.5 0 0 1 5 0v9.75M10.25 11a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-.5 10.5v-4a2.25 2.25 0 0 1 4.5 0v4");
}
</style><path class="stbe3eb-i"/>`,
		"fallback": "uix:genre-family",
	});
}

export default Component;
