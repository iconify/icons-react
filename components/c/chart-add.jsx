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

.lcyk3hb9o {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-1 10v7M14.5 18h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="guqqttbir"/><path class="lcyk3hb9o"/></g>`,
		"fallback": "uix-sharp:chart-add",
	});
}

export default Component;
