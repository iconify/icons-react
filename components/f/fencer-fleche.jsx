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
		"content": `<style>.v2b38231g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM10.5 10L8 14.5l-5.5 6m5.5-6l5 2.5l1 4.5M10.5 10l11-1.5m-11 1.5l-4-2.5");
}
</style><path class="v2b38231g"/>`,
		"fallback": "uix-sharp:fencer-fleche",
	});
}

export default Component;
