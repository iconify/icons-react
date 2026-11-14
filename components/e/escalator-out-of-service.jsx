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
		"content": `<style>.p8_jkmaeu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20h4v-4h4v-1.1m4-3.8V8h5M3 15.5l4.243-4.243m3.959-3.959L14.5 4m-11-.5l17 17");
}
</style><path class="p8_jkmaeu"/>`,
		"fallback": "uix-sharp:escalator-out-of-service",
	});
}

export default Component;
