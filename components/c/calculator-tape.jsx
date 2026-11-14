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
		"content": `<style>.cfipu451g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10a3 3 0 0 1 3 3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 6v11l1.75 1.5L10.5 20l1.75 1.5L14 20l1.75 1.5L17 20.25V9m-7.25 4h4.5m-4.5 3.5h2.75");
}
</style><path class="cfipu451g"/>`,
		"fallback": "uix:calculator-tape",
	});
}

export default Component;
