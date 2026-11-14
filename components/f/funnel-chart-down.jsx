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
		"content": `<style>.kk3ff5spl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.478 18.952L9 20.5V11L3 3.5h16L13 11v5.595m5-2.095v7m-3-3l3 3l3-3");
}
</style><path class="kk3ff5spl"/>`,
		"fallback": "uix-sharp:funnel-chart-down",
	});
}

export default Component;
