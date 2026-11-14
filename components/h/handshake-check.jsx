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
		"content": `<style>.zg5uxbc2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h5l3-2H14l3.5 2.5h4m-19 6H6l4.5 3H13l4-3h4.5M5 6v6.5m14-6v6m-10.5-4l3 3M12 7l3 3m-.25 8l2 2L21 15.75");
}
</style><path class="zg5uxbc2l"/>`,
		"fallback": "uix:handshake-check",
	});
}

export default Component;
