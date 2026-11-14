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
		"content": `<style>.c2ncahaxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-13-3V14m4.5 3.5V10m4.5 7.5v-2m0-2.75v-2M17 8V6");
}
</style><path class="c2ncahaxk"/>`,
		"fallback": "uix-sharp:forecast-best-case",
	});
}

export default Component;
