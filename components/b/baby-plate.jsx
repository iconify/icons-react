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
		"content": `<style>.j5684cu_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Zm0 0h15m-7.5 0v7.5M19 7a1.5 2.5 0 1 0 3 0a1.5 2.5 0 1 0-3 0Zm1.5 2.5V20");
}
</style><path class="j5684cu_x"/>`,
		"fallback": "uix-sharp:baby-plate",
	});
}

export default Component;
