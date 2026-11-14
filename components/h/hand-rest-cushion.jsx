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
		"content": `<style>.poa2cfhyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5C8 6 16 6 20.5 7.5q1.5 3 0 6C16 15 8 15 3.5 13.5q-1.5-3 0-6Zm-1 10h19");
}
</style><path class="poa2cfhyp"/>`,
		"fallback": "uix-sharp:hand-rest-cushion",
	});
}

export default Component;
