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
		"content": `<style>.g144t33sv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h4a2.5 2.5 0 0 1 2.5 2.5V8A2.5 2.5 0 0 1 9 10.5H6l-3.25 2.75V5.5A2.5 2.5 0 0 1 5 3Zm10 8h4a2.5 2.5 0 0 1 2.5 2.5v7.25l-3.25-2.25H15a2.5 2.5 0 0 1-2.5-2.5v-2.5A2.5 2.5 0 0 1 15 11Zm-.75-5.5h6.25M18 3l2.5 2.5L18 8");
}
</style><path class="g144t33sv"/>`,
		"fallback": "uix-sharp:chat-handoff",
	});
}

export default Component;
