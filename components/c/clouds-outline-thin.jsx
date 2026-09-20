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

.td_xqobtu {
  d: path("M9 21a3.5 3.5 0 0 1 2 -6 4.5 4.5 0 0 1 8 -1 4.5 4.5 0 0 1 3 7Z");
}

.wo-i6bqjc {
  d: path("M2 14a3 3 0 0 1 2 -5.5 4 4 0 0 1 7.5 -1A4.5 4.5 0 0 1 15 14Z");
}
</style><g class="hntgybcog"><path class="wo-i6bqjc"/><path class="td_xqobtu"/></g>`,
		"fallback": "iconmind:clouds-outline-thin",
	});
}

export default Component;
