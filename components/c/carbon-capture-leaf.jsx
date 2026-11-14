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
		"content": `<style>.v5bsqmnfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.379 13.653C12.626 16.753 8.395 18.5 3 18.5C3 9 8 3 19 3c0 3.598-.861 6.694-2.474 9.152M3 18.5l8.5-8.5m6.5 4.5v7m-3-3l3 3l3-3");
}
</style><path class="v5bsqmnfu"/>`,
		"fallback": "uix:carbon-capture-leaf",
	});
}

export default Component;
