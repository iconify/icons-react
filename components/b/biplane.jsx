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
		"content": `<style>.ikdvoobnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 6.5l3 4h12a2 2 0 0 1 0 4h-15ZM7 6h10M9.5 6v4.5m5-4.5v4.5m-7 7H16m-4.25-3v3m7.75-5h2m0-4v8");
}
</style><path class="ikdvoobnc"/>`,
		"fallback": "uix:biplane",
	});
}

export default Component;
