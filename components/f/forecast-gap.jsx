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
		"content": `<style>.nilkytgrs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-13-3V14m4.5 3.5V11m4.5 6.5v-5m-10.5-6h2m2.75 0h2m2.75 0h2");
}
</style><path class="nilkytgrs"/>`,
		"fallback": "uix-sharp:forecast-gap",
	});
}

export default Component;
