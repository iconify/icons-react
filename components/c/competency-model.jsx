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

.n-h6gab3y {
  d: path("M2.5 15.25a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0");
}

.n5z_dcchp {
  d: path("M10 15.25a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0");
}

.p620un0_t {
  d: path("M6.25 8.75a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0");
}
</style><g class="hntgybcog"><path class="p620un0_t"/><path class="n-h6gab3y"/><path class="n5z_dcchp"/></g>`,
		"fallback": "uix:competency-model",
	});
}

export default Component;
