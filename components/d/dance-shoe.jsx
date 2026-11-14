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
		"content": `<style>.rwzb__b7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.75c0-2.5 2.5-3.5 6-3.5S14 8 16 8h5v12h-3l-.5-4.25ZM16 8c0-3.5 5-3.5 5 0");
}
</style><path class="rwzb__b7f"/>`,
		"fallback": "uix:dance-shoe",
	});
}

export default Component;
