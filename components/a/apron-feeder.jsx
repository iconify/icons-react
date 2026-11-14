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
		"content": `<style>.qvjie0blx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 2.5l3.5 6h4l3.5-6m-8.043 8.906l13.625 4.959a2.25 2.25 0 0 1 1.345 2.884a2.25 2.25 0 0 1-2.884 1.345L4.418 15.635a2.25 2.25 0 0 1-1.345-2.884a2.25 2.25 0 0 1 2.884-1.345m2.584.941l-1.539 4.228m5.768-2.689l-1.54 4.228m5.768-2.689l-1.539 4.228");
}
</style><path class="qvjie0blx"/>`,
		"fallback": "uix:apron-feeder",
	});
}

export default Component;
