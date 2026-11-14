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
		"content": `<style>.h1t0-ilmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v16h-19Zm4 4.5h6m-5 8v-3m4.5 3V12m4.5 4.5v-5.25");
}
</style><path class="h1t0-ilmi"/>`,
		"fallback": "uix-sharp:chart-widget",
	});
}

export default Component;
