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
		"content": `<style>.ifrtmqgtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm6 0V3m0 0q5.5 1 6 6.5m1.5 12l-3.25-3.25A2 2 0 0 1 18 16a2 2 0 0 1 3.25 2.25Z");
}
</style><path class="ifrtmqgtv"/>`,
		"fallback": "uix-sharp:charity-dance-marathon",
	});
}

export default Component;
