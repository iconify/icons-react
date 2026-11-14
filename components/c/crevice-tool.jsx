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
		"content": `<style>.n498jz1nm {
  d: path("m16.596 5.99l3.182.353l-8.485 9.9l-3.536-3.536Z");
}

.rbydfgbqf {
  d: path("M7.05 12L12 16.95l-4.243 4.242l-4.949-4.949Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n498jz1nm"/><path class="rbydfgbqf"/></g>`,
		"fallback": "uix-sharp:crevice-tool",
	});
}

export default Component;
