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
		"content": `<style>.ai7hq7bgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.1 17H2.5V7h.6m7.8 0H19v8.1m2.5-4.6v3m-18-10l17 17");
}
</style><path class="ai7hq7bgp"/>`,
		"fallback": "uix-sharp:battery-off",
	});
}

export default Component;
