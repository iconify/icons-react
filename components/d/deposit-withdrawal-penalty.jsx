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

.rhr3mnkku {
  d: path("M4.5 10.5h-2v3h2m3.25-2.75h.01M10.5 8.5h3m4.5 6v4m0 2.75h.01");
}

.xys9lvbka {
  d: path("M15.385 19.5H14v-1.75c-.75.25-1.25.25-2 .25s-1.25 0-2-.25v1.75H7.5V17C5.25 16 4 14.25 4 12c0-3.5 3.5-6 8-6s8 2.5 8 6q0 .28-.025.548");
}
</style><g class="hntgybcog"><path class="xys9lvbka"/><path class="rhr3mnkku"/></g>`,
		"fallback": "uix:deposit-withdrawal-penalty",
	});
}

export default Component;
