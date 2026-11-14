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
		"content": `<style>.v4ipik6mw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 18.5H3v-14h15v7m-11-9V6m7-3.5V6M3 9h15m-3.75 8.75a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1 2.5l5-5");
}
</style><path class="v4ipik6mw"/>`,
		"fallback": "uix-sharp:holiday-closed-sign",
	});
}

export default Component;
