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
		"content": `<style>.asagl-b1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 21.75l13-13a3.536 3.536 0 1 0-5 0M5.75 18.5l2.5 2.5");
}
</style><path class="asagl-b1l"/>`,
		"fallback": "uix-sharp:boat-hook",
	});
}

export default Component;
