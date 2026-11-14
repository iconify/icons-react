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
		"content": `<style>.k_0-xtbhm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18v12H3Zm4 12v7m10-7v7m-7.75-16v6m5.5-6v6m-5.5-3h5.5");
}
</style><path class="k_0-xtbhm"/>`,
		"fallback": "uix-sharp:hospital-sign",
	});
}

export default Component;
