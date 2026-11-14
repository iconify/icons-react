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
		"content": `<style>.zs6jmzbre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 8.75h10.5A3.25 3.25 0 0 1 20.5 12a3.25 3.25 0 0 1-3.25 3.25H6.75A3.25 3.25 0 0 1 3.5 12a3.25 3.25 0 0 1 3.25-3.25M6.5 6H10m4 0h3.5m-11 12H10m4 0h3.5");
}
</style><path class="zs6jmzbre"/>`,
		"fallback": "uix:board-room-table",
	});
}

export default Component;
