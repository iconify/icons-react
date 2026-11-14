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
		"content": `<style>.qjaxl2bjn {
  d: path("M6.076 14.368A5 5 0 0 1 8.5 9.17m7.25 12.58l3-6.5l3 6.5M17 19h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xukyidbyw {
  d: path("M15.584 15.5H3l1.5-11q7-1.5 14 0l.705 5.17M11 13.5L6.5 7");
}
</style><g class="ulnmmdpxh"><path class="xukyidbyw"/><path class="qjaxl2bjn"/></g>`,
		"fallback": "uix-sharp:auto-wipers",
	});
}

export default Component;
