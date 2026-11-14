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
		"content": `<style>.rotm6acpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6.5h11A2.5 2.5 0 0 1 20 9v6.5a2.5 2.5 0 0 1-2.5 2.5H11l-4 3v-3h-.5A2.5 2.5 0 0 1 4 15.5V9a2.5 2.5 0 0 1 2.5-2.5ZM12 2.75V6.5M9.5 12h.01m4.99 0h.01");
}
</style><path class="rotm6acpn"/>`,
		"fallback": "uix-sharp:chatbot",
	});
}

export default Component;
