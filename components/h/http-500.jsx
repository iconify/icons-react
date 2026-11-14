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
		"content": `<style>.dxqykr0_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h16v7h-16Zm8 16.5h-8v-7h9.7M6 6.5h.01M6 16h.01M13 17.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm4.5-2.5v2.75m0 2.25h.01");
}
</style><path class="dxqykr0_q"/>`,
		"fallback": "uix-sharp:http-500",
	});
}

export default Component;
