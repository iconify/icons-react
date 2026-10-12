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
		"content": `<style>.p4919rkgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 4.25l12.5 15.5M17 4.25v2C17 8.5 16 10 13.75 11M7 19.75v-2C7 15.5 8 14 10.25 13");
}
</style><path class="p4919rkgp"/>`,
		"fallback": "iconoven:aleph",
	});
}

export default Component;
