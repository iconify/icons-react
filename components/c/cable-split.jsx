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
		"content": `<style>.jkblr7bjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.5h.5A1.75 1.75 0 0 1 7.5 4.25v1A1.75 1.75 0 0 1 5.75 7h-.5A1.75 1.75 0 0 1 3.5 5.25v-1A1.75 1.75 0 0 1 5.25 2.5m13 0h.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 18.75 7h-.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75M5.5 7v1c0 3 6.5 2.5 6.5 6v2.5M18.5 7v1c0 3-6.5 2.5-6.5 6m-.25 2.5h.5A1.75 1.75 0 0 1 14 18.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 10 19.75v-1.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="jkblr7bjd"/>`,
		"fallback": "uix:cable-split",
	});
}

export default Component;
