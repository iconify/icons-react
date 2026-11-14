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
		"content": `<style>.kbwo--bcx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 14.5h14.5A1.75 1.75 0 0 1 21 16.25v1.5a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 17.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m1-5h11.5A1.75 1.75 0 0 1 19 11.25v1.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 12.75v-1.5A1.75 1.75 0 0 1 5.75 9.5m1-5h9.5A1.75 1.75 0 0 1 18 6.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-9.5A1.75 1.75 0 0 1 5 7.75v-1.5A1.75 1.75 0 0 1 6.75 4.5M6 14.5v5m10-10v5m-8-10v5");
}
</style><path class="kbwo--bcx"/>`,
		"fallback": "uix:anthology",
	});
}

export default Component;
