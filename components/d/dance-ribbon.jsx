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
		"content": `<style>.m7b38enqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21l5.5-5.5m0 0c3-3-1.5-6 1-9.5S18 3 18 7.5c0 4-4.5 4.5-3 8.5c1 2.5 4.5 3 6.5 1.5");
}
</style><path class="m7b38enqz"/>`,
		"fallback": "uix:dance-ribbon",
	});
}

export default Component;
