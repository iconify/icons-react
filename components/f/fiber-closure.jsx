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
		"content": `<style>.ct6zgubjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13.5v-3a5.5 5.5 0 0 1 11 0v3m-13 0h15V17h-15Zm-2 6c0-3 1-4.25 2-4.25m17 4.25c0-3-1-4.25-2-4.25");
}
</style><path class="ct6zgubjp"/>`,
		"fallback": "uix-sharp:fiber-closure",
	});
}

export default Component;
