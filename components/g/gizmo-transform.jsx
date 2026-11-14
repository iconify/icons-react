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
		"content": `<style>.cw8y0ccoy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 13V3.5M7.5 6L10 3.5L12.5 6M10 13h10.5M18 10.5l2.5 2.5l-2.5 2.5M10 13l-6 6m0-3.5V19h3.5");
}
</style><path class="cw8y0ccoy"/>`,
		"fallback": "uix:gizmo-transform",
	});
}

export default Component;
