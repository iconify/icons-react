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
		"content": `<style>.xm2_f9rxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15.5a6 6 0 0 1 12 0ZM12 3v6.5M12 3l4 1.75l-4 1.75ZM3 19.5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="xm2_f9rxo"/>`,
		"fallback": "uix-sharp:buoy-boundary",
	});
}

export default Component;
