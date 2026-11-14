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
		"content": `<style>.awpxd4b4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M3 21.5v-1C3 17 6 15 10 15c1.06 0 2.12.18 3.027.539M18.5 14v7M15 17.5h7");
}
</style><path class="awpxd4b4j"/>`,
		"fallback": "uix:friend-request-game",
	});
}

export default Component;
