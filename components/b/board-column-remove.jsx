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
		"content": `<style>.ekdkustfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.5zA2.25 2.25 0 0 1 7 4.75v14.5a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25V4.75A2.25 2.25 0 0 1 4.75 2.5m7.25 0za2.25 2.25 0 0 1 2.25 2.25v8.5A2.25 2.25 0 0 1 12 15.5a2.25 2.25 0 0 1-2.25-2.25v-8.5A2.25 2.25 0 0 1 12 2.5m7.25 0za2.25 2.25 0 0 1 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 17 9.25v-4.5a2.25 2.25 0 0 1 2.25-2.25M15 18h6");
}
</style><path class="ekdkustfc"/>`,
		"fallback": "uix:board-column-remove",
	});
}

export default Component;
