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
		"content": `<style>.dtq-6yaao {
  d: path("M2.75 18.5v-9a4 4 0 0 1 4-4h10.5a4 4 0 0 1 4 4v9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xm6-webzd {
  d: path("M5.5 11.25C5.5 9.5 7 8.75 8 9.5c1-.75 2.5 0 2.5 1.75s-.75 2.75-1 4.25l-.25 2L8 16l-1.25 1.5l-.25-2c-.25-1.5-1-2.5-1-4.25m8 0c0-1.75 1.5-2.5 2.5-1.75c1-.75 2.5 0 2.5 1.75s-.75 2.75-1 4.25l-.25 2L16 16l-1.25 1.5l-.25-2c-.25-1.5-1-2.5-1-4.25");
}
</style><g class="hntgybcog"><path class="dtq-6yaao"/><path class="xm6-webzd"/></g>`,
		"fallback": "uix:clear-aligner",
	});
}

export default Component;
