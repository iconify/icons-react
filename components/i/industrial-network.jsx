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
		"content": `<style>.rf06dcvmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h19m-16.75 0V12M12 7.5V12m7.25-4.5V12m-15 0h1A1.75 1.75 0 0 1 7 13.75v1a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 4.25 12m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 11.5 12m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 14.75v-1A1.75 1.75 0 0 1 18.75 12");
}
</style><path class="rf06dcvmh"/>`,
		"fallback": "uix:industrial-network",
	});
}

export default Component;
