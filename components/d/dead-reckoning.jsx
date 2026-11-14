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
		"content": `<style>.got5039yq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5h.01M7 17h.01m3.49-3.5h.01M10 10.75h3.25V14m1.25-7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><path class="got5039yq"/>`,
		"fallback": "uix:dead-reckoning",
	});
}

export default Component;
