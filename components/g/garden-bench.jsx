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
		"content": `<style>.f34pi2bvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 2.5h12.5A1.75 1.75 0 0 1 20 4.25v1.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 5.75v-1.5A1.75 1.75 0 0 1 5.75 2.5M4 11h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 14H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 11m2.5-3.5V11m11-3.5V11M5 14v7m14-7v7");
}
</style><path class="f34pi2bvw"/>`,
		"fallback": "uix:garden-bench",
	});
}

export default Component;
