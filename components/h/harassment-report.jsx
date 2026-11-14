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
		"content": `<style>.sasu6uytd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.25 21.5v-2.75L10 15.5a2 2 0 0 1 2.5-2.5V9a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v7.5c0 1.5-.75 2.25-1.25 2.5v2.5Zm2-14.5v4.5m3-4.5v4.5M4 2.5V15M4 2.5l6.5 3l-6.5 3");
}
</style><path class="sasu6uytd"/>`,
		"fallback": "uix:harassment-report",
	});
}

export default Component;
