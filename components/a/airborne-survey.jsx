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
		"content": `<style>.pyf79x67m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8.5L3.5 3h2L8 5.5h8.5c2.25 0 4 .75 4 1.5s-1.75 1.5-4 1.5Zm1.5 12l6.5-9l6.5 9m-16 0h19");
}
</style><path class="pyf79x67m"/>`,
		"fallback": "uix:airborne-survey",
	});
}

export default Component;
