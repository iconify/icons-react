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
		"content": `<style>.i6p8zvb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19v13.5h-19ZM8 3l4 5l4-5m-5 7.5l-1 6.75m4.5-6.75l-1 6.75m-5-5H16m-8 3.5h7.5");
}
</style><path class="i6p8zvb6x"/>`,
		"fallback": "uix-sharp:channel-number",
	});
}

export default Component;
