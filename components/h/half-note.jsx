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
		"content": `<style>.i-mn9ybqj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.24 19.12a4 2.9-20 1 0 7.52-2.74a4 2.9-20 1 0-7.52 2.74m7.52-2.74V2.75");
}
</style><path class="i-mn9ybqj"/>`,
		"fallback": "iconoven:half-note",
	});
}

export default Component;
