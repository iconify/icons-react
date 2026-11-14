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
		"content": `<style>.snsh3ubwv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11a6 6 0 0 1 12 0Zm4 0v9m4-9v9m3 0q1-6 7.5-7q-.5 4-7.5 7ZM2.5 20h19");
}
</style><path class="snsh3ubwv"/>`,
		"fallback": "uix-sharp:forest-floor",
	});
}

export default Component;
