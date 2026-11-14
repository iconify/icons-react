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
		"content": `<style>.yva6amv5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 11.5v-2a4 4 0 0 1 8 0v2Zm1.5 0v10m5-10v10m-8.5 0h12M7 4.5L5.5 3M17 4.5L18.5 3");
}
</style><path class="yva6amv5r"/>`,
		"fallback": "uix-sharp:bollard-light",
	});
}

export default Component;
