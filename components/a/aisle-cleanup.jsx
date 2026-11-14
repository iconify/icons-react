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
		"content": `<style>.sb5c3ud8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.5 2.5l-7.5 10m-4.5 0h9m-8 0l-2 5m4.5-5l-.75 5m3.25-5l.25 5m2.25-5l1.5 5m-13 0c-2.25 0-2.25 3.75 0 3.75h15c2.25 0 2.25-3.75 0-3.75");
}
</style><path class="sb5c3ud8b"/>`,
		"fallback": "uix:aisle-cleanup",
	});
}

export default Component;
