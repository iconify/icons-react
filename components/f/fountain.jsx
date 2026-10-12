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
		"content": `<style>.xzufxybwu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 16h16.5v2.75a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5ZM8.5 9.75h7a3.5 3.5 0 0 1-2.75 3.4V16h-1.5v-3.1A3.5 3.5 0 0 1 8.5 9.75m3.5 0v-5m0 0c-3.5-2.5-8.25-1-8.25 5v3m8.25-8c3.5-2.5 8.25-1 8.25 5v3");
}
</style><path class="xzufxybwu"/>`,
		"fallback": "iconoven:fountain",
	});
}

export default Component;
