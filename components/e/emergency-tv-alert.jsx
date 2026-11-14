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
		"content": `<style>.ue_-v7bog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 16.5H2.5V5h19v11.5h-.7M8.5 2L12 5l3.5-3M18 14.5V18m0 3h.01");
}
</style><path class="ue_-v7bog"/>`,
		"fallback": "uix-sharp:emergency-tv-alert",
	});
}

export default Component;
