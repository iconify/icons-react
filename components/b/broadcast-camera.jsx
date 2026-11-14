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
		"content": `<style>.leeike_ub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h11v9H6Zm0 2L2.5 4v8L6 10.5Zm11 5l4 4m-9.5-2v8m-4 0h8");
}
</style><path class="leeike_ub"/>`,
		"fallback": "uix-sharp:broadcast-camera",
	});
}

export default Component;
