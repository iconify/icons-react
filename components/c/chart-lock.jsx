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
		"content": `<style>.guqqttbir {
  d: path("M3.5 3v17.5h8.2");
}

.t9rixlbsy {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-4.5 13h7V22h-7Zm1.75 0v-1.25a1.75 1.75 0 0 1 3.5 0v1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="guqqttbir"/><path class="t9rixlbsy"/></g>`,
		"fallback": "uix-sharp:chart-lock",
	});
}

export default Component;
