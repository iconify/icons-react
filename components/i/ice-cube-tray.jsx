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
		"content": `<style>.ynfv5y0mi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6h11A3.5 3.5 0 0 1 21 9.5v5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 14.5v-5A3.5 3.5 0 0 1 6.5 6M9 6v12m6-12v12M3 12h18");
}
</style><path class="ynfv5y0mi"/>`,
		"fallback": "uix:ice-cube-tray",
	});
}

export default Component;
