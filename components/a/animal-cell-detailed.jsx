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
		"content": `<style>.dmbd6v-cb {
  d: path("M5.75 10.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m7.5 4.5a2.25 1.25 0 1 0 4.5 0a2.25 1.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pm-67_bax {
  d: path("M2.5 12a9.5 8 0 1 0 19 0a9.5 8 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="pm-67_bax"/><path class="dmbd6v-cb"/></g>`,
		"fallback": "uix:animal-cell-detailed",
	});
}

export default Component;
