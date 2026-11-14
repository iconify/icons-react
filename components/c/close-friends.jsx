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

.wu-oz9fgc {
  d: path("m12.882 8.286l.532 1.08a1.5 1.5 0 0 0 1.13.82l1.191.173a.983.983 0 0 1 .545 1.677l-.862.841a1.5 1.5 0 0 0-.432 1.327l.204 1.187a.983.983 0 0 1-1.427 1.036l-1.065-.56a1.5 1.5 0 0 0-1.396 0l-1.065.56a.983.983 0 0 1-1.427-1.036l.204-1.187a1.5 1.5 0 0 0-.432-1.327l-.862-.841a.983.983 0 0 1 .545-1.677l1.191-.173a1.5 1.5 0 0 0 1.13-.82l.532-1.08a.983.983 0 0 1 1.764 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="wu-oz9fgc"/></g>`,
		"fallback": "uix:close-friends",
	});
}

export default Component;
