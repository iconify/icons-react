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
		"content": `<style>.dudyvnbof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 5.5h1.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 12.75 9h-1.5A1.75 1.75 0 0 1 9.5 7.25a1.75 1.75 0 0 1 1.75-1.75M9.5 7.25H5V3.5m9.5 3.75H19V3.5m-16.5 0h5m9 0h5M9 12.5L6 20m6-7.5V20m3-7.5l3 7.5");
}
</style><path class="dudyvnbof"/>`,
		"fallback": "uix:drone-spray",
	});
}

export default Component;
