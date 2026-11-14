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
		"content": `<style>.fy59h0tha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6.5h16m-3-3l3 3l-3 3m-13 8h16m-3-3l3 3l-3 3");
}
</style><path class="fy59h0tha"/>`,
		"fallback": "uix-sharp:arrows-right-pair",
	});
}

export default Component;
