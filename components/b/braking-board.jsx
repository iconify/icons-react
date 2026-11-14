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
		"content": `<style>.jmnjks4zo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v10h-19ZM12 13v8.5M7.25 13l3.5-10M12 13l3.5-10m1.25 10l3.5-10");
}
</style><path class="jmnjks4zo"/>`,
		"fallback": "uix-sharp:braking-board",
	});
}

export default Component;
