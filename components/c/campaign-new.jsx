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
		"content": `<style>.cs_ap7bdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.868 15.421L6.5 11H3V7h3.5L14 2.5v12.854M5.5 11l1 4M17 6l2.5-1.5m-2 5h3M18 15v6m-3-3h6");
}
</style><path class="cs_ap7bdh"/>`,
		"fallback": "uix:campaign-new",
	});
}

export default Component;
