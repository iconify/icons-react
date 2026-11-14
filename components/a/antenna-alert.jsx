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
		"content": `<style>.sc7rzuwid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM10 8v13.5m-4.5-19a6 6 0 0 0 0 8m9-8a6 6 0 0 1 0 8m3.5 4V18m0 3h.01");
}
</style><path class="sc7rzuwid"/>`,
		"fallback": "uix-sharp:antenna-alert",
	});
}

export default Component;
