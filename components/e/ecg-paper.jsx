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
		"content": `<style>.giuwvvbzw {
  d: path("M3 5h18v12l-2 2l-2-2l-2 2l-2-2l-2 2l-2-2l-2 2l-2-2l-2 2Z");
}

.m2n06fbwx {
  d: path("M5.5 11.5h3l1.5-3l2 5.5l1.5-4l1 1.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="giuwvvbzw"/><path class="m2n06fbwx"/></g>`,
		"fallback": "uix-sharp:ecg-paper",
	});
}

export default Component;
