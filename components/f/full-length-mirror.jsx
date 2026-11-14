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
		"content": `<style>.nw4jt61eb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10a5.5 7.5 0 1 0 11 0a5.5 7.5 0 1 0-11 0M9 16.5l-2 5m8-5l2 5M9.5 8l2-2m-2 5L13 7.5");
}
</style><path class="nw4jt61eb"/>`,
		"fallback": "uix:full-length-mirror",
	});
}

export default Component;
