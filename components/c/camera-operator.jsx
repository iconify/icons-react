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
		"content": `<style>.fp47uyybo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.5h11v7H4Zm11 2l5-2v7l-5-2Zm-8-2V3h5v2.5m-2.5 7L5 21m4.5-8.5L14 21");
}
</style><path class="fp47uyybo"/>`,
		"fallback": "uix-sharp:camera-operator",
	});
}

export default Component;
