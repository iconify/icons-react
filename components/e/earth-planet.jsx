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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.qt2t-736g {
  d: path("M3.75 7.25H7.5c2 0 3 1.75 2 3.75l-1 2c-.75 1.5-1.5 3-3 3.75H3.75m13-13C15 5.5 14 7.5 15 9.5s-1.5 3.5-.5 5.5c.75 1.5 3.5.5 6.75-.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="qt2t-736g"/></g>`,
		"fallback": "uix:earth-planet",
	});
}

export default Component;
