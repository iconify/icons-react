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
		"content": `<style>.v388-45wt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h10a4 4 0 0 1 4 4v2h-4v-1a1 1 0 0 0-1-1H3Zm5 0V3M5 3h6m4 11.75L17.25 18a2.5 2.5 0 1 1-4.5 0Z");
}
</style><path class="v388-45wt"/>`,
		"fallback": "uix-sharp:drinking-water-tap",
	});
}

export default Component;
