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
		"content": `<style>.sn3_yybhy {
  d: path("M8.5 2.5h7v6h6v7h-6v6h-7v-6h-6v-7h6Z");
}

.teegcvsqy {
  fill: currentColor;
  d: path("M8.5 2.5h7v6h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sn3_yybhy"/><path class="teegcvsqy"/></g>`,
		"fallback": "uix-sharp:dpad-up",
	});
}

export default Component;
