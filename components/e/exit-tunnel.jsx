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
		"content": `<style>.qf3lf64zj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21v-9.5a9.5 9.5 0 0 1 19 0V21M6 21l4-7m8 7l-4-7m-2 3.75V21");
}
</style><path class="qf3lf64zj"/>`,
		"fallback": "uix:exit-tunnel",
	});
}

export default Component;
