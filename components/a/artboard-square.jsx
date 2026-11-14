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
		"content": `<style>.ogzq1rdky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 6.25h9.75A2.625 2.625 0 0 1 19.5 8.875v9.75a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 18.625v-9.75A2.625 2.625 0 0 1 7.125 6.25M4.5 3.5H10");
}
</style><path class="ogzq1rdky"/>`,
		"fallback": "uix:artboard-square",
	});
}

export default Component;
