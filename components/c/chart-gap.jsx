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
		"content": `<style>.anu460bes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17L6 11l3 2.5m6-4l3 2.5l3.5-6m-10.75 6.5h.01m1.49-1h.01m1.24-1h.01");
}
</style><path class="anu460bes"/>`,
		"fallback": "uix-sharp:chart-gap",
	});
}

export default Component;
