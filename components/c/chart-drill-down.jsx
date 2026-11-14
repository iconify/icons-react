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
		"content": `<style>.c26c61sqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.5h15.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 7H4.25A1.75 1.75 0 0 1 2.5 5.25v-1A1.75 1.75 0 0 1 4.25 2.5M12 9v4.5m-2.25-2.25L12 13.5l2.25-2.25M4.25 16H5.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 5.5 21.5H4.25a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 4.25 16m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 11.5 16m7 0h1.25a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75H18.5a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 18.5 16");
}
</style><path class="c26c61sqy"/>`,
		"fallback": "uix:chart-drill-down",
	});
}

export default Component;
