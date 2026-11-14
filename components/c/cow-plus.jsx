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
		"content": `<style>.a0ecp1b6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 12.5H7V5h13v7.2M7 6l-3.25-.5l-1.25 5l2.5 1l2-1m-2.75-5L3.5 3m6 9.5V17m3.5-4.5v2.7m5-.2v6m-3-3h6");
}
</style><path class="a0ecp1b6a"/>`,
		"fallback": "uix-sharp:cow-plus",
	});
}

export default Component;
