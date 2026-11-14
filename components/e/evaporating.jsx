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
		"content": `<style>.jzjm0cc6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13.5c.5 5 4 7 9 7s8.5-2 9-7m-14.5 2h11m-9.5-5Q6.5 8.75 8 7t0-3.5m4 7Q10.5 8.75 12 7t0-3.5m4 7Q14.5 8.75 16 7t0-3.5");
}
</style><path class="jzjm0cc6v"/>`,
		"fallback": "uix:evaporating",
	});
}

export default Component;
