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
		"content": `<style>.giroj_n6k {
  d: path("M2.5 11.75a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m5.5 5.5h13.5");
}

.har_uhbbo {
  d: path("M8 9.25a2.5 2.5 0 1 1-2.5 2.5m9.5 5.5L16.5 13l1.5 4.25L19.5 13l1.5 4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="giroj_n6k"/><path class="har_uhbbo"/></g>`,
		"fallback": "uix:artificial-grass-roll",
	});
}

export default Component;
