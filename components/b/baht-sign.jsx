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
		"content": `<style>.cro4ckb-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12H13a3.75 3.75 0 0 0 0-7.5H7.5v15H14a3.75 3.75 0 0 0 0-7.5m-3-9.5v19");
}
</style><path class="cro4ckb-w"/>`,
		"fallback": "uix:baht-sign",
	});
}

export default Component;
