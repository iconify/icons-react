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
		"content": `<style>.zkhqhtdms {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19m-19 15h19M8.25 8h7.5a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 15.75 16h-7.5a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 8.25 8");
}
</style><path class="zkhqhtdms"/>`,
		"fallback": "uix:grid-box",
	});
}

export default Component;
