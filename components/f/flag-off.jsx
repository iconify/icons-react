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
		"content": `<style>.ar6rm-rum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.9 4H19l-3 4.75l3 4.75h-1.564m-7.9 0H5V8.936M5 8.9V21M3.5 3.5l17 17");
}
</style><path class="ar6rm-rum"/>`,
		"fallback": "uix-sharp:flag-off",
	});
}

export default Component;
