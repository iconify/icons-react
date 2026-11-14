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
		"content": `<style>.hih6arkkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19M3 20V10a3 3 0 0 1 6 0v10m0-10a3 3 0 0 1 6 0v10m0-10a3 3 0 0 1 6 0v10M2.5 20h19");
}
</style><path class="hih6arkkn"/>`,
		"fallback": "uix-sharp:cloister",
	});
}

export default Component;
