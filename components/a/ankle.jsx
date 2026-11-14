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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v475hacfs {
  d: path("M9.5 16a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.wtwi9kb-u {
  d: path("M8.5 2.5V13c0 2.5-1 4-1 5.5c0 1.75 1.25 3 3 3h9c1.25 0 2-.75 1.75-1.75S19.5 18 17.5 17.5l-2.25-1.25C14.5 15.5 14 14.5 14 13V2.5");
}
</style><g class="hntgybcog"><path class="wtwi9kb-u"/><path class="v475hacfs"/></g>`,
		"fallback": "uix:ankle",
	});
}

export default Component;
