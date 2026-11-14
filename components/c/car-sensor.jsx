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
		"content": `<style>.kih52ac1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 8l1.5-3.25Q7 4 8 4h8q1 0 1.5.75L19 8M3 8h18v5H3Zm9 2.5h.01M8.5 15.75q3.5 2 7 0M6 19q6 3.5 12 0");
}
</style><path class="kih52ac1y"/>`,
		"fallback": "uix-sharp:car-sensor",
	});
}

export default Component;
