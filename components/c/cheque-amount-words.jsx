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
		"content": `<style>.eijbrbbxj {
  d: path("M4.75 15L6.5 9l1.75 6M5.5 13h2m3.25-4v6m0-1.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm9.237 1.237a1.75 1.75 0 1 1 0-2.474");
}

.mhuvow97a {
  d: path("M2.5 5.5h19v13h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mhuvow97a"/><path class="eijbrbbxj"/></g>`,
		"fallback": "uix-sharp:cheque-amount-words",
	});
}

export default Component;
