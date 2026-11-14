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
		"content": `<style>.a4zx8s36i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21V6h-1V3.5h8V6h-1v15m3 0v-9l1.5-1.5l1.25 1.5l1.25-2.5l1 1.5v10m-17 0h19");
}
</style><path class="a4zx8s36i"/>`,
		"fallback": "uix:ancient-ruins",
	});
}

export default Component;
