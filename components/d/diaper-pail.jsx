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
		"content": `<style>.fa-097bgw {
  d: path("m4.5 7.5l1.25 14h12.5l1.25-14m-16 0h17v-1a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2Zm6.5-3v-2h4v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5svyfb-j {
  d: path("M7.75 11h8.5v1.5c-1.5.5-2.25 2.25-2.25 5h-4c0-2.75-.75-4.5-2.25-5Z");
}
</style><g class="hntgybcog"><path class="fa-097bgw"/><path class="j5svyfb-j"/></g>`,
		"fallback": "uix:diaper-pail",
	});
}

export default Component;
