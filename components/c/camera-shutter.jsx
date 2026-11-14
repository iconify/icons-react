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
		"content": `<style>.gq41lac3n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm11.75-3.75l5 9.25m-3-5.5L11 21m3.25-5.25H3.75m6.25 0L4.75 6.5m3 5.5L13 3M9.75 8.25h10.5");
}
</style><path class="gq41lac3n"/>`,
		"fallback": "uix-sharp:camera-shutter",
	});
}

export default Component;
