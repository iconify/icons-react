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
		"content": `<style>.wkcq391lr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4A3.5 3.5 0 0 1 17.5 6v12a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 6.5 18V6A3.5 3.5 0 0 1 10 2.5M3 5v14M21 5v14M10 9.5L13.5 6");
}
</style><path class="wkcq391lr"/>`,
		"fallback": "uix:dressing-room-mirror",
	});
}

export default Component;
