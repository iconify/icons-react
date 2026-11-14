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
		"content": `<style>.wz24j3b7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.187 9.475l6.75-5.162a1.75 1.75 0 0 1 2.126 0l6.75 5.162a1.75 1.75 0 0 1 .687 1.39v8.385A1.75 1.75 0 0 1 18.75 21H5.25a1.75 1.75 0 0 1-1.75-1.75v-8.385a1.75 1.75 0 0 1 .687-1.39M9 10.5h6m0 0l-4 7");
}
</style><path class="wz24j3b7i"/>`,
		"fallback": "uix:bingo-hall",
	});
}

export default Component;
