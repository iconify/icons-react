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
		"content": `<style>.sjp0h693g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3h13.75A2.625 2.625 0 0 1 21.5 5.625v5.75A2.625 2.625 0 0 1 18.875 14H5.125A2.625 2.625 0 0 1 2.5 11.375v-5.75A2.625 2.625 0 0 1 5.125 3M9 14v7.5m6-7.5v7.5M6.5 7H14m-7.5 3H11");
}
</style><path class="sjp0h693g"/>`,
		"fallback": "uix:billboard",
	});
}

export default Component;
