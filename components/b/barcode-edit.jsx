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
		"content": `<style>.w1oissm1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5v15m3-15v15m3-15v15m3-15V12m2.233 7.337l.178-.892a1.5 1.5 0 0 1 .41-.766l3.304-3.304a1.237 1.237 0 0 1 1.75 0a1.237 1.237 0 0 1 0 1.75L17 19.5a1.5 1.5 0 0 1-.586.362l-.789.263a.688.688 0 0 1-.892-.788");
}
</style><path class="w1oissm1e"/>`,
		"fallback": "uix:barcode-edit",
	});
}

export default Component;
