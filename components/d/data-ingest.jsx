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
		"content": `<style>.gr5-ktbtb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9.5h11m-11 5h11m-11-5L7 5.5m3.5 9l-3.5 4M2.5 12h.01m2.74 0h.01M8 12h.01");
}
</style><path class="gr5-ktbtb"/>`,
		"fallback": "uix:data-ingest",
	});
}

export default Component;
