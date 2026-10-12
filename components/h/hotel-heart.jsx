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

.qbw579n4m {
  width: 4.75px;
  height: 2.5px;
  x: 6.25px;
  y: 7px;
  rx: 1.25px;
}

.wsj_w8buk {
  d: path("M3.25 4.5v16.75m17.75-3v3M3.25 12.5H18.5A2.5 2.5 0 0 1 21 15v3.25H3.25Z");
}
</style><g class="hntgybcog"><path class="wsj_w8buk"/><rect class="qbw579n4m"/></g>`,
		"fallback": "iconoven:hotel-heart",
	});
}

export default Component;
