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
		"content": `<style>.fvsullk9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5v17M4.75 11h15a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-15A1.75 1.75 0 0 1 3 13.75v-1A1.75 1.75 0 0 1 4.75 11m3-3.5h2a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 9.75 11h-2A1.75 1.75 0 0 1 6 9.25A1.75 1.75 0 0 1 7.75 7.5m12.75 8v5");
}
</style><path class="fvsullk9g"/>`,
		"fallback": "uix:bed-single",
	});
}

export default Component;
