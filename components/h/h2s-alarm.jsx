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
		"content": `<style>.rhrf-pb7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 16v-4.5a4.5 4.5 0 0 1 9 0V16m-9.75 0h10.5A1.75 1.75 0 0 1 19 17.75v.5A1.75 1.75 0 0 1 17.25 20H6.75A1.75 1.75 0 0 1 5 18.25v-.5A1.75 1.75 0 0 1 6.75 16M4.5 10a7.5 7.5 0 0 1 3-5.5m12 5.5a7.5 7.5 0 0 0-3-5.5");
}
</style><path class="rhrf-pb7e"/>`,
		"fallback": "uix:h2s-alarm",
	});
}

export default Component;
