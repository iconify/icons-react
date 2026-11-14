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
		"content": `<style>.djbjr1boq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.813 12.249C18.187 11.677 17.18 11.295 16 11l-3.5-1C11 9.5 10 8.5 10 7V2.5H4.5V10c-1.5 1.25-2 2.75-2 4c0 1.5 1 2.5 2.5 2.5h7.238M18 21c-1.75-1.25-3-2.5-3-4c0-1.25.75-2 1.75-2c.5 0 1 .25 1.25.75c.25-.5.75-.75 1.25-.75c1 0 1.75.75 1.75 2c0 1.5-1.25 2.75-3 4Z");
}
</style><path class="djbjr1boq"/>`,
		"fallback": "uix-sharp:foot-care",
	});
}

export default Component;
