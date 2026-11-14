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
		"content": `<style>.jq497dthp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7V5a2 2 0 0 1 4 0v2M5 7h8v2.5H5Zm.5 2.5V19A2.5 2.5 0 0 0 8 21.5h2a2.5 2.5 0 0 0 2.5-2.5V9.5m4 8.5c-1.5-2 1.5-4 0-6s1.5-4 0-6m3.75 12c-1.5-2 1.5-4 0-6s1.5-4 0-6");
}
</style><path class="jq497dthp"/>`,
		"fallback": "uix-sharp:baby-bottle-sterilizer",
	});
}

export default Component;
