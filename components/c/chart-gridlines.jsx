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
		"content": `<style>.qk-gaqbca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21M5.5 8.5h2.25m2.75 0h2.75m3 0h3.25M5.5 14h2.25m2.75 0h2.75m3 0h3.25M9 3v3m0 4.5V12m0 4v2.5M15 3v3m0 4.5V12m0 4v2.5");
}
</style><path class="qk-gaqbca"/>`,
		"fallback": "uix:chart-gridlines",
	});
}

export default Component;
