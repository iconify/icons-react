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
		"content": `<style>.dh8rt7btq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.198 19.754c-.71.475-1.454.746-2.198.746c-3.5 0-7-6-7-11c0-4 3-7 7-7s7 3 7 7c0 1.198-.201 2.454-.555 3.671M16.125 16za1.125 1.125 0 0 1 1.125 1.125v3.25a1.125 1.125 0 0 1-1.125 1.125A1.125 1.125 0 0 1 15 20.375v-3.25A1.125 1.125 0 0 1 16.125 16m4.75 0zA1.125 1.125 0 0 1 22 17.125v3.25a1.125 1.125 0 0 1-1.125 1.125a1.125 1.125 0 0 1-1.125-1.125v-3.25A1.125 1.125 0 0 1 20.875 16m-3.625 2.75h2.5");
}
</style><path class="dh8rt7btq"/>`,
		"fallback": "uix:eggs-protein",
	});
}

export default Component;
