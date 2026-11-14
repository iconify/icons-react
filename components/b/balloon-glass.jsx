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
		"content": `<style>.sfvettglk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3c-4.5 4.5-3.5 12.5 4 12.5s8.5-8 4-12.5Zm4 12.5v5m-4 0h8");
}
</style><path class="sfvettglk"/>`,
		"fallback": "uix:balloon-glass",
	});
}

export default Component;
