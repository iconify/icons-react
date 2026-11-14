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
		"content": `<style>.vn1c-xx3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h11M8.5 5v14m10 0V9.5m-2.75 2.75L18.5 9.5l2.75 2.75");
}
</style><path class="vn1c-xx3t"/>`,
		"fallback": "uix-sharp:font-size-up",
	});
}

export default Component;
