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

.s_jt13b0l {
  d: path("M6 5h13a2.5 2.5 0 0 1 2.5 2.5v8m-19-4h16");
}

.xbp42o01a {
  d: path("M6 8h9a3.5 3.5 0 0 1 3.5 3.5V16a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16v-4.5A3.5 3.5 0 0 1 6 8");
}
</style><g class="hntgybcog"><path class="xbp42o01a"/><path class="s_jt13b0l"/></g>`,
		"fallback": "uix:card-multiple",
	});
}

export default Component;
