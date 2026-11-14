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
		"content": `<style>.r6idl0dsj {
  d: path("M4 20h15.5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v12.5a1.5 1.5 0 0 1-3 0V10h3M9 8h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wy0fr6btc {
  d: path("M8.25 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm7.75-2h2.5m-2.5 4h2.5");
}
</style><g class="ulnmmdpxh"><path class="r6idl0dsj"/><path class="wy0fr6btc"/></g>`,
		"fallback": "uix-sharp:crypto-news",
	});
}

export default Component;
