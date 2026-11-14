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
		"content": `<style>.qodyo8b0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13h11a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18v-1.5A3.5 3.5 0 0 1 6.5 13m0 0V6.5l1.75-3l1.75 3V13M6.5 6.5H10m5.5 6.5V9M14 9h3l-1.5-5.5Z");
}
</style><path class="qodyo8b0c"/>`,
		"fallback": "uix:art-supplies-box",
	});
}

export default Component;
