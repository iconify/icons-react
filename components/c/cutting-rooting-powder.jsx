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
		"content": `<style>.hqpuy7baa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.375 11.5h3.25A4.375 4.375 0 0 1 18 15.875v1.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125v-1.25a4.375 4.375 0 0 1 4.375-4.375M7.5 8.75h9M12 5.5v3.25m0-3.25c0-2-2-3-4.5-3c0 2 2 3 4.5 3m0 0c0-2 2-3 4.5-3c0 2-2 3-4.5 3");
}
</style><path class="hqpuy7baa"/>`,
		"fallback": "uix:cutting-rooting-powder",
	});
}

export default Component;
