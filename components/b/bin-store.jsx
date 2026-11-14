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
		"content": `<style>.o_vkxfb1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2 10l10-6.5L22 10M4 8.75V21.5M20 8.75V21.5M7.5 11.75h9m-8 0l1 9.75h5l1-9.75");
}
</style><path class="o_vkxfb1h"/>`,
		"fallback": "uix:bin-store",
	});
}

export default Component;
