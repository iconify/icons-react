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
		"content": `<style>.hbi_66b8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 14h12.75A2.625 2.625 0 0 1 21 16.625v2.25a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 18.875v-2.25A2.625 2.625 0 0 1 5.625 14M6 11h12m-7-4.5h2A1.5 1.5 0 0 1 14.5 8v1.5A1.5 1.5 0 0 1 13 11h-2a1.5 1.5 0 0 1-1.5-1.5V8A1.5 1.5 0 0 1 11 6.5m1-4v4m0 4.5v3");
}
</style><path class="hbi_66b8e"/>`,
		"fallback": "uix:anchor-bolt",
	});
}

export default Component;
