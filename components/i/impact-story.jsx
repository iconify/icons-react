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

.lhawocb3f {
  d: path("M10 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2 6.75c0-1.25 1.75-2 4-2s4 .75 4 2");
}

.u-ma0bc_i {
  d: path("M4.5 3h15a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H10L5.5 21v-3.5h-1a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="u-ma0bc_i"/><path class="lhawocb3f"/></g>`,
		"fallback": "uix:impact-story",
	});
}

export default Component;
