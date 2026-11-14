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
		"content": `<style>.suehqdv1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 19.5l15-15m-11 11L6.5 8m5.5 3l7.5 1M18 15v6m-2.5-4.5l5 3m-5 0l5-3");
}
</style><path class="suehqdv1h"/>`,
		"fallback": "uix:hoarfrost",
	});
}

export default Component;
