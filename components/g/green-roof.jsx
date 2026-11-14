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
		"content": `<style>.xxfx3yblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9.5h14.5A1.75 1.75 0 0 1 21 11.25v1.5a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 12.75v-1.5A1.75 1.75 0 0 1 4.75 9.5M3 9.5a3 3 0 0 1 6 0a3 3 0 0 1 6 0a3 3 0 0 1 6 0m-18.5 8h19");
}
</style><path class="xxfx3yblb"/>`,
		"fallback": "uix:green-roof",
	});
}

export default Component;
