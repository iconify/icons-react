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
		"content": `<style>.cct_g31hh {
  d: path("M6 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm6 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.uhy-iqbkv {
  d: path("M3 14.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm6 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm6 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cct_g31hh"/><path class="uhy-iqbkv"/></g>`,
		"fallback": "uix-sharp:fish-eggs",
	});
}

export default Component;
