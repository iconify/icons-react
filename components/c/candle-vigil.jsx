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
		"content": `<style>.kydufpbwj {
  d: path("M5 3.5V16a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5V3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhhou-5jt {
  d: path("M9 13h6v5.25H9Zm3-7c1.75 1.75 2 3 0 4c-2-1-1.75-2.25 0-4Z");
}
</style><g class="ulnmmdpxh"><path class="kydufpbwj"/><path class="xhhou-5jt"/></g>`,
		"fallback": "uix-sharp:candle-vigil",
	});
}

export default Component;
