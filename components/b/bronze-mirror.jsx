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
		"content": `<style>.fec5iabdu {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm7 7v5");
}

.s7axybcmk {
  d: path("M10.25 9.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fec5iabdu"/><path class="s7axybcmk"/></g>`,
		"fallback": "uix-sharp:bronze-mirror",
	});
}

export default Component;
