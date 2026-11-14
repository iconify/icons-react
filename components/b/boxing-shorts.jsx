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
		"content": `<style>.mjgbvrbib {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 4.5h12.5A1.75 1.75 0 0 1 20 6.25v.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 6.75v-.5A1.75 1.75 0 0 1 5.75 4.5m-.25 4L3.5 20h7l1.5-5.5l1.5 5.5h7l-2-11.5");
}
</style><path class="mjgbvrbib"/>`,
		"fallback": "uix:boxing-shorts",
	});
}

export default Component;
