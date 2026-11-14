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
		"content": `<style>.vyx-ai0xo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19v5.5h-19ZM4 13l2-7.5L8 13l2-7.5l2 7.5l2-7.5l2 7.5l2-7.5l2 7.5");
}
</style><path class="vyx-ai0xo"/>`,
		"fallback": "uix-sharp:artificial-grass",
	});
}

export default Component;
