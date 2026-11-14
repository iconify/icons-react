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
		"content": `<style>.vwpd4fb8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 21l2.25-6m-1.5-2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m3.75-1.5L12 8m-.75-1.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m3.5 2L18.5 14m-2.25 1.5l4.5-3");
}
</style><path class="vwpd4fb8h"/>`,
		"fallback": "uix:character-rig",
	});
}

export default Component;
