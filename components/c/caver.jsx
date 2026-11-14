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
		"content": `<style>.adzs6ib2w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10.5a7.5 7.5 0 0 1 11-6.75M18.75 7a7.5 7.5 0 0 1 .75 3.5M3 10.5h18m-13 11v-4c-2-1.5-3.5-4-3.5-7m15 0l1 2.75c.25.5 0 1-.75 1H19v2.25c0 1-1 2-2 2h-2v3m0-16.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><path class="adzs6ib2w"/>`,
		"fallback": "uix-sharp:caver",
	});
}

export default Component;
