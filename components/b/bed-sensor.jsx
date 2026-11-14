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
		"content": `<style>.luxks7dan {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5v14M3 13h12.8m3.8 0H21M5.75 7.25h3.5v3h-3.5Zm8.75 11.5H16l1.5-3l1.75 5.75l1.25-2.75h1");
}
</style><path class="luxks7dan"/>`,
		"fallback": "uix-sharp:bed-sensor",
	});
}

export default Component;
