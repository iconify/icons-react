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
		"content": `<style>.mil_iqb1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 14V7a2 2 0 0 1 2-2h3.5l2 4l7 1.5c2 .5 3 1.5 3 3.5Zm0 2.5h17.5V19H3.25Z");
}
</style><path class="mil_iqb1z"/>`,
		"fallback": "uix-sharp:curling-slider",
	});
}

export default Component;
