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
		"content": `<style>.wl_odub_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M7 13c0-1.75 2.25-2.25 5-2.25s5 .5 5 2.25M5.625 15.75h12.75A2.625 2.625 0 0 1 21 18.375v.5a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 18.875v-.5a2.625 2.625 0 0 1 2.625-2.625m.875 3h4m3 0h4");
}
</style><path class="wl_odub_q"/>`,
		"fallback": "uix:artist-profile",
	});
}

export default Component;
