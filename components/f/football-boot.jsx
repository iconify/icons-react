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
		"content": `<style>.ipvgjc6to {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5h6l.5 5c4 .5 8.5 2 10 5V16H3zm8 5.5l.75 2.75m2.5-2l.75 2.75M5.5 16v3m4.5-3v3m4.5-3v3m4.5-3v3");
}
</style><path class="ipvgjc6to"/>`,
		"fallback": "uix:football-boot",
	});
}

export default Component;
