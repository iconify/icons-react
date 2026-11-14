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
		"content": `<style>.fz0s34bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 6c-1.5 5-4 12-8.75 12c-3 0-5-2.6-5-6s2-6 5-6C14.5 6 17 13 18.5 18");
}
</style><path class="fz0s34bjh"/>`,
		"fallback": "uix-sharp:alpha",
	});
}

export default Component;
