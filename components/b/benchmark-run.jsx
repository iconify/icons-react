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
		"content": `<style>.dkwrbdv7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V14m4 6.5V9m4 11.5v-17m5.278 10.633l2.61 1.585a1.5 1.5 0 0 1 0 2.564l-2.61 1.585a1.5 1.5 0 0 1-2.278-1.283v-3.168a1.5 1.5 0 0 1 2.278-1.283");
}
</style><path class="dkwrbdv7a"/>`,
		"fallback": "uix:benchmark-run",
	});
}

export default Component;
