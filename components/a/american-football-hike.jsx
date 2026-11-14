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
		"content": `<style>.x6tn3l1yr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.75c3-6 15-6 18 0c-3 6-15 6-18 0m-.5 4.5h19m-12-4.5h5M10.75 7.5V10m2.5-2.5V10m2.25 7.75h-7M10.25 16L8.5 17.75l1.75 1.75");
}
</style><path class="x6tn3l1yr"/>`,
		"fallback": "uix:american-football-hike",
	});
}

export default Component;
