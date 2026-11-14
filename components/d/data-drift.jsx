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
		"content": `<style>.zw4jnpbws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-14.5-4l7-10m-2 10l1.5-2m1.25-2l1.5-2m1.25-2l1.5-2");
}
</style><path class="zw4jnpbws"/>`,
		"fallback": "uix:data-drift",
	});
}

export default Component;
