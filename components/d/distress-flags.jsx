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
		"content": `<style>.zif794byu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 2.5v19m0-18.5h7.5v7.5h-7.5Zm0 10.25h7.5v7.5h-7.5Zm0-2.75l7.5-7.5m-7.5 17.75l7.5-7.5");
}
</style><path class="zif794byu"/>`,
		"fallback": "uix-sharp:distress-flags",
	});
}

export default Component;
