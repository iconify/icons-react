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
		"content": `<style>.u8i764i1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 10h4.5a5 5 0 0 1 5 5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5a5 5 0 0 1 5-5m-.5 4h.01M11 16.5h.01M13 13h.01M16 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-3.75-1.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="u8i764i1n"/>`,
		"fallback": "uix:car-wash-sponge",
	});
}

export default Component;
