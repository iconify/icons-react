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
		"content": `<style>.oyob1852f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 8c-4.5 1.5-6 5-6 9v2A2.5 2.5 0 0 0 7 21.5h10a2.5 2.5 0 0 0 2.5-2.5v-2c0-4-1.5-7.5-6-9ZM12 8c-3-.5-5.5-2.5-4.5-4.25C8.5 2.25 11 4 12 8c1-4 3.5-5.75 4.5-4.25C17.5 5.5 15 7.5 12 8");
}
</style><path class="oyob1852f"/>`,
		"fallback": "uix-sharp:bin-bag-tied",
	});
}

export default Component;
