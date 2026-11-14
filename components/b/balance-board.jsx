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
		"content": `<style>.jedzecc7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.838 9.613l15.349-2.158a1.75 1.75 0 0 1 1.977 1.49a1.75 1.75 0 0 1-1.489 1.976l-15.35 2.158a1.75 1.75 0 0 1-1.976-1.49a1.75 1.75 0 0 1 1.489-1.976M8.5 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><path class="jedzecc7v"/>`,
		"fallback": "uix:balance-board",
	});
}

export default Component;
