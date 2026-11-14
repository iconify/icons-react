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
		"content": `<style>.l40fjv7bt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5q0 12 12 12Zm3 9v7.5m-3.5 0h7M11 11l4-4m2.75-2.75h.01");
}
</style><path class="l40fjv7bt"/>`,
		"fallback": "uix-sharp:antenna-high-gain",
	});
}

export default Component;
