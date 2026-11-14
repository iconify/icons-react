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

.wgvcbxbja {
  d: path("M2.75 11.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m11 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.ynq_wbbih {
  d: path("M6.5 11.25h4L8.5 7m-1 0h2m1 4.25l4-4.25l3 4.25M14.5 7L14 5h1.5m-12 12.75v2.75h17v-2.75m-11 0v2.75m5-2.75v2.75");
}
</style><g class="hntgybcog"><path class="wgvcbxbja"/><path class="ynq_wbbih"/></g>`,
		"fallback": "uix:bicycle-parking",
	});
}

export default Component;
