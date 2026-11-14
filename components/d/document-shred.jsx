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
		"content": `<style>.bg-546bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 9h13.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 18.875 15H5.125A2.625 2.625 0 0 1 2.5 12.375v-.75A2.625 2.625 0 0 1 5.125 9M6.5 9V2.5h11V9M7 18v3.5m5-3.5v3.5m5-3.5v3.5");
}
</style><path class="bg-546bbr"/>`,
		"fallback": "uix:document-shred",
	});
}

export default Component;
