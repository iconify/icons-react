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
		"content": `<style>.onv_71shj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13.5V5a2.5 2.5 0 0 1 5 0v8.5a4.25 4.25 0 1 1-5 0Zm12 7v-17m-3 3l3-3l3 3M8 9.5v7");
}
</style><path class="onv_71shj"/>`,
		"fallback": "uix-sharp:heating-boost",
	});
}

export default Component;
