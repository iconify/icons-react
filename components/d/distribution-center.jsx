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
		"content": `<style>.y--i9lf6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12.5v-6l5-3.5v3.5l5-3.5v3.5l5-3.5v9.5Zm7.5 3.25V21m-2-2l2 2l2-2m-5-3.25l-5 5.5m0-3v3h3m8-5.5l5 5.5m-3 0h3v-3");
}
</style><path class="y--i9lf6v"/>`,
		"fallback": "uix:distribution-center",
	});
}

export default Component;
