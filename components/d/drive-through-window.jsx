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
		"content": `<style>.gdominh7r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7l1.5-4h14L20 7Zm1.5 8V7h13v4.7M2.5 15h8.7m3.55 2.75l1-3.25h4.5l1 3.25m-7.25 0h8v2.5h-8Zm1.75 2.5v1.5m4.5-1.5v1.5");
}
</style><path class="gdominh7r"/>`,
		"fallback": "uix-sharp:drive-through-window",
	});
}

export default Component;
