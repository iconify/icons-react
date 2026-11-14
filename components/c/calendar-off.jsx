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
		"content": `<style>.g99tynsik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.9 5h11.6v11.6m-3.9 3.9H3.5V7.4M8 3v1.1M16 3v4M3.5 10h2.6m7.8 0h6.6m-17-6.5l17 17");
}
</style><path class="g99tynsik"/>`,
		"fallback": "uix-sharp:calendar-off",
	});
}

export default Component;
