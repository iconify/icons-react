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
		"content": `<style>.wt6ruzbto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 21V3.5m-3.25 3.25L15 3.5l3.25 3.25M15 15L5 5m0 4.5V5h4.5");
}
</style><path class="wt6ruzbto"/>`,
		"fallback": "uix-sharp:arrow-split-left",
	});
}

export default Component;
