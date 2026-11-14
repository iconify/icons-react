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
		"content": `<style>.d5ugggbpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.5 12l-5-6.25A4 4 0 0 0 3.75 12a4 4 0 0 0 4.75 6.25Zm0 0h7.75m-3 0v3.5m3-3.5v3");
}
</style><path class="d5ugggbpq"/>`,
		"fallback": "uix:heart-key",
	});
}

export default Component;
