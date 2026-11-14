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
		"content": `<style>.dxiz4_b2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 19.5v-11a3.5 3.5 0 0 1 7 0v11m-13 0h19M3 9.5L5.5 12L3 14.5m18-5L18.5 12l2.5 2.5");
}
</style><path class="dxiz4_b2j"/>`,
		"fallback": "uix-sharp:cave-squeeze",
	});
}

export default Component;
