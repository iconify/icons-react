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
		"content": `<style>.f-kroobnx {
  d: path("M3 13v5.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V13M10.5 7L8.75 9.5L10.5 12m3-5l1.75 2.5L13.5 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zn-qv1jyh {
  d: path("M9.5 3h5A3.5 3.5 0 0 1 18 6.5v6a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 12.5v-6A3.5 3.5 0 0 1 9.5 3");
}
</style><g class="hntgybcog"><path class="zn-qv1jyh"/><path class="f-kroobnx"/></g>`,
		"fallback": "uix:code-sandbox",
	});
}

export default Component;
