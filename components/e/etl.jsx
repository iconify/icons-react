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
		"content": `<style>.hk0_nuilx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5H3v8h3.5M3 7.5h3m2.5-4H14m-2.75 0v8m5.25-8v8h4M3 17.5h17.5m-3-3l3 3l-3 3");
}
</style><path class="hk0_nuilx"/>`,
		"fallback": "uix:etl",
	});
}

export default Component;
