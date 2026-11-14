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
		"content": `<style>.f84doxbug {
  d: path("M3 9.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rvlg7-cpb {
  d: path("M9 9.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m5.75 8.5l2 2L21 15.75");
}
</style><g class="hntgybcog"><path class="f84doxbug"/><path class="rvlg7-cpb"/></g>`,
		"fallback": "uix:colour-match",
	});
}

export default Component;
