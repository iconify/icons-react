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
		"content": `<style>.lbw7-vl-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5Q7 14 12 18q4.5-4.5 9.5 0m-5-2.25V7.5m-1.75-2a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm4.932-3.182a4.5 4.5 0 0 1 0 6.364m-6.364 0a4.5 4.5 0 0 1 0-6.364");
}
</style><path class="lbw7-vl-k"/>`,
		"fallback": "uix-sharp:coverage-rural",
	});
}

export default Component;
