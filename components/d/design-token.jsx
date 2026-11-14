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
		"content": `<style>.cprxzwnkx {
  d: path("M7 2.5h7l5 5v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vwykxh_6g {
  d: path("M14 2.5v5h5m-6.25 3.683l1.531.884a1.5 1.5 0 0 1 .75 1.299v1.768a1.5 1.5 0 0 1-.75 1.299l-1.531.884a1.5 1.5 0 0 1-1.5 0l-1.531-.884a1.5 1.5 0 0 1-.75-1.299v-1.768a1.5 1.5 0 0 1 .75-1.299l1.531-.884a1.5 1.5 0 0 1 1.5 0");
}
</style><g class="hntgybcog"><path class="cprxzwnkx"/><path class="vwykxh_6g"/></g>`,
		"fallback": "uix:design-token",
	});
}

export default Component;
