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
		"content": `<style>.bfbh71elr {
  d: path("M21.5 19.5h-19V10L7 5.5l4.5 4.5v9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxjhkbc1i {
  d: path("M5.5 19.5V15h3v4.5m7.5 0v-6a1.5 1.5 0 0 1 0-3a1.5 1.5 0 0 1 0 3m4.5 6V8a1.5 1.5 0 0 1 0-3a1.5 1.5 0 0 1 0 3");
}
</style><g class="ulnmmdpxh"><path class="bfbh71elr"/><path class="wxjhkbc1i"/></g>`,
		"fallback": "uix-sharp:cottage-garden",
	});
}

export default Component;
