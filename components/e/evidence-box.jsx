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
		"content": `<style>.l5xw6ccmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h15v4h-15Zm10.2 14H3.5v-10h13v3.6m-1 4.9l2.75-2.75L21 16v5.5h-5.5Z");
}
</style><path class="l5xw6ccmw"/>`,
		"fallback": "uix-sharp:evidence-box",
	});
}

export default Component;
