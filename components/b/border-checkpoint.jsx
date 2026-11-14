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
		"content": `<style>.svay76b8u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5V8l3-3l3 3v12.5Zm10-10v10M11.5 7h10v3.5h-10Zm4 0l-1 3.5M19 7l-1 3.5");
}
</style><path class="svay76b8u"/>`,
		"fallback": "uix-sharp:border-checkpoint",
	});
}

export default Component;
