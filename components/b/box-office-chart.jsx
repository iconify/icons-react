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
		"content": `<style>.f61o-vbfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21h10.2m-8.2 0v-7m4 7V9.5m4 11.5V4m3 11h6v1.5a1 1 0 0 0 0 2V20h-6v-1.5a1 1 0 0 0 0-2Z");
}
</style><path class="f61o-vbfb"/>`,
		"fallback": "uix-sharp:box-office-chart",
	});
}

export default Component;
