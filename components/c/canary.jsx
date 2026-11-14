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
		"content": `<style>.rqwy_nbne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m12.25-3.5l4.25-1.25M17.25 10l3.25 1m-15 4.5l-2.5 2M13 9h.01m-2.51 8.5v3m-5.5 0h13");
}
</style><path class="rqwy_nbne"/>`,
		"fallback": "uix:canary",
	});
}

export default Component;
