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
		"content": `<style>.cdv9e9b3j {
  d: path("M10 6V4.5a2 2 0 0 1 4 0V6M8 6h8v2.5H8Zm.5 2.5V16a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V8.5");
}

.i-3hmub1m {
  d: path("M5 11v7a3.5 3.5 0 0 0 3.5 3.5h7A3.5 3.5 0 0 0 19 18v-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cdv9e9b3j"/><path class="i-3hmub1m"/></g>`,
		"fallback": "uix-sharp:baby-bottle-warmer",
	});
}

export default Component;
