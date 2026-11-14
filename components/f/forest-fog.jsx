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
		"content": `<style>.nj6x-vwwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 13.5l2.25-4H4.5l2.5-6l2.5 6h-.75l2.25 4m2.75 0L16 10h-.75l2.25-4l2.25 4H19l2.25 3.5M2.5 17h10m3 0h6M5 20.5h3m3 0h8");
}
</style><path class="nj6x-vwwt"/>`,
		"fallback": "uix:forest-fog",
	});
}

export default Component;
