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
		"content": `<style>.vbuhgkxdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 19.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14.5-14.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-11 13L10 14m4-4l3.75-3.75M9.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><path class="vbuhgkxdp"/>`,
		"fallback": "uix:fewest-changes",
	});
}

export default Component;
