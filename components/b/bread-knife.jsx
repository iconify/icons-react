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
		"content": `<style>.zbzml3_td {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.045 17.48l2.121-2.121a1.75 1.75 0 0 1 2.475 0a1.75 1.75 0 0 1 0 2.475L6.52 19.955a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475m5.48-7.248l5.876-5.876a1.5 1.5 0 0 1 1.176-.435l2.662.205a1.17 1.17 0 0 1 1.07 1.333l-.039.271a1.235 1.235 0 0 1-1.111 1.055a1.17 1.17 0 0 0-1.06 1.061a1.17 1.17 0 0 1-1.061 1.06a1.17 1.17 0 0 0-1.061 1.061a1.17 1.17 0 0 1-1.06 1.061a1.17 1.17 0 0 0-1.061 1.06a1.17 1.17 0 0 1-1.061 1.061l-.175.016a.785.785 0 0 0-.708.868a.281.281 0 0 1-.478.229l-1.909-1.908a1.5 1.5 0 0 1 0-2.122");
}
</style><path class="zbzml3_td"/>`,
		"fallback": "uix:bread-knife",
	});
}

export default Component;
