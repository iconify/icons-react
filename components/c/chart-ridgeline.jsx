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
		"content": `<style>.arbpwkk0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8C6 8 7 4.5 9.5 4.5S13 8 20.5 8m-17 6C7 14 8 10 11 10s4 4 9.5 4m-17 6C8 20 9 16 13 16c3 0 4 4 7.5 4");
}
</style><path class="arbpwkk0u"/>`,
		"fallback": "uix:chart-ridgeline",
	});
}

export default Component;
