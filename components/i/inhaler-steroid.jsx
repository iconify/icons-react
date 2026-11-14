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
		"content": `<style>.pagucbbci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 9H12v10.5a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5v-4h3Zm.75-6.5h4.5V9h-4.5Zm8.75 13h6v5.75h-6Zm0 2.25h6m-4.25-3.25V16m2.5-1.5V16");
}
</style><path class="pagucbbci"/>`,
		"fallback": "uix-sharp:inhaler-steroid",
	});
}

export default Component;
