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
		"content": `<style>.qgqjhyb3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 5.5C8.75 4 10.2 2.75 12 2.75S15.25 4 15.25 5.5Zm0 3h6.5v7.75h-6.5zm0 4.75L13.5 8.5m-3 7.75l4.75-4.75m-7.5 8.75h8.5");
}
</style><path class="qgqjhyb3g"/>`,
		"fallback": "iconoven:barber-pole-sharp",
	});
}

export default Component;
