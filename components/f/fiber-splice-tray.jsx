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
		"content": `<style>.npcnlcbcd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5V8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v1.5m-17 6V17a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-1.5m-18-3H9m6 0h6.5M9 11h6v3H9Z");
}
</style><path class="npcnlcbcd"/>`,
		"fallback": "uix-sharp:fiber-splice-tray",
	});
}

export default Component;
