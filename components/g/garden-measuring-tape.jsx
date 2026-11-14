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

.iymmkma3v {
  d: path("M5.5 4.5H14a3 3 0 0 1 3 3V19H5.5a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3");
}

.kqgd4xbjd {
  d: path("M6.75 11.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0M17 15.5h4.5V19H17");
}
</style><g class="hntgybcog"><path class="iymmkma3v"/><path class="kqgd4xbjd"/></g>`,
		"fallback": "uix:garden-measuring-tape",
	});
}

export default Component;
