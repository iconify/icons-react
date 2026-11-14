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
		"content": `<style>.ls2i7wbhd {
  d: path("M7 5.5h7.5v4H7Zm.5 8.5h.01M11 14h.01M7.5 18h.01m12.24-1.75C19.5 15.5 18.9 15 18 15c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1M18 13.75V15m0 6v1");
}

.smt-0cbpz {
  d: path("M13.8 21.5H4v-19h13.5v8.4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="smt-0cbpz"/><path class="ls2i7wbhd"/></g>`,
		"fallback": "uix-sharp:financial-calculator",
	});
}

export default Component;
