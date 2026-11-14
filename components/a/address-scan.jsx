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
		"content": `<style>.nb--qgvik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5V5A2.5 2.5 0 0 1 5 2.5h2.5m9 0H19A2.5 2.5 0 0 1 21.5 5v2.5m0 9V19a2.5 2.5 0 0 1-2.5 2.5h-2.5m-9 0H5A2.5 2.5 0 0 1 2.5 19v-2.5M8.25 8h7.5a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 15.75 16h-7.5a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 8.25 8M4 12h16");
}
</style><path class="nb--qgvik"/>`,
		"fallback": "uix:address-scan",
	});
}

export default Component;
