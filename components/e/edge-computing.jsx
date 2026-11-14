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
		"content": `<style>.gb379xbsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 15H10a2.5 2.5 0 0 0 0-5a3.25 3.25 0 0 0-6 .5A2.25 2.25 0 0 0 5.75 15M17.125 4.5h1.75A2.625 2.625 0 0 1 21.5 7.125v9.75a2.625 2.625 0 0 1-2.625 2.625h-1.75a2.625 2.625 0 0 1-2.625-2.625v-9.75A2.625 2.625 0 0 1 17.125 4.5m-2.625 5h7m-7 5h7m-9-2.5h2");
}
</style><path class="gb379xbsb"/>`,
		"fallback": "uix:edge-computing",
	});
}

export default Component;
