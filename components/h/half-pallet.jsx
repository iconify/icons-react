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
		"content": `<style>.g7qaculrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 15V6A1.5 1.5 0 0 1 9 4.5h6A1.5 1.5 0 0 1 16.5 6v9M12 4.5V8m-8 7h16M4 19.5h16M5 15v4.5m7-4.5v4.5m7-4.5v4.5");
}
</style><path class="g7qaculrg"/>`,
		"fallback": "uix:half-pallet",
	});
}

export default Component;
