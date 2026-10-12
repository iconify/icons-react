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
		"content": `<style>.p0b34k-4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.52 5.55l3.21 1.9l.52.3l.29-.53l2.17-3.94l.29-.53l.29.53l2.17 3.94l.29.53l.52-.3l3.21-1.9l.52-.3l-.28.53l-2.69 5.19l-.28.53v.5q0 .5.15 1.08l.45 1.84l.15.58h-9l.15-.58l.45-1.84q.15-.58.15-1.08v-.5l-.28-.53l-2.69-5.19L5 5.25zM8.5 11.5h7M5 18.5h14v2.75H5z");
}
</style><path class="p0b34k-4u"/>`,
		"fallback": "iconoven:chess-queen-sharp",
	});
}

export default Component;
