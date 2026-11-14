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

.oe3ptb26s {
  d: path("M8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21.5c0-4.25 4-7 9-7s9 2.75 9 7");
}

.pmj-49n-u {
  d: path("m8.5 15l1.75 3.5l1.75-4l1.75 4L15.5 15");
}
</style><g class="hntgybcog"><path class="oe3ptb26s"/><path class="pmj-49n-u"/></g>`,
		"fallback": "uix:biologist",
	});
}

export default Component;
