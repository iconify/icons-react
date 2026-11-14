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
		"content": `<style>.ffw-mq63t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 17v-1.5c-2-1.2-3.5-3.3-3.5-6a6.5 6.5 0 0 1 13 0c0 2.7-1.5 4.8-3.5 6V17Zm.5 3.5h5M10 12v-1.5m2 1.5V8m2 4V9.5");
}
</style><path class="ffw-mq63t"/>`,
		"fallback": "uix-sharp:insight",
	});
}

export default Component;
