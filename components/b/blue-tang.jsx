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
		"content": `<style>.re6s5ysxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12c2-7 10-7.5 12.5-2L21 6l-2 6l2 6l-5.5-4C13 19.5 5 19 3 12m4-1.5h.01");
}
</style><path class="re6s5ysxj"/>`,
		"fallback": "uix:blue-tang",
	});
}

export default Component;
