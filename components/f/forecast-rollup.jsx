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
		"content": `<style>.rmz33zbfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5h9.6m-6.1-3V13m3 4.5v-4.9m0-.4V9.5m3 8v-1.6m0-3.7V6m8.5 9H16l3 3.25l-3 3.25h5.5");
}
</style><path class="rmz33zbfs"/>`,
		"fallback": "uix-sharp:forecast-rollup",
	});
}

export default Component;
