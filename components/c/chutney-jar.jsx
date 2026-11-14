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
		"content": `<style>.h99v-zbgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10.5h5A5.5 5.5 0 0 1 20 16a5.5 5.5 0 0 1-5.5 5.5h-5A5.5 5.5 0 0 1 4 16a5.5 5.5 0 0 1 5.5-5.5m-2-3h9A1.5 1.5 0 0 1 18 9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 9a1.5 1.5 0 0 1 1.5-1.5m-4-3.75h12.25m0 0a2.75 1.5 0 1 0 5.5 0a2.75 1.5 0 1 0-5.5 0");
}
</style><path class="h99v-zbgw"/>`,
		"fallback": "uix:chutney-jar",
	});
}

export default Component;
