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
		"content": `<style>.dtnhfudyf {
  d: path("M3 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}

.pynywcbic {
  d: path("M7.5 13a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 0l9-9m-2.5-1l3.25.25L21 6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dtnhfudyf"/><path class="pynywcbic"/></g>`,
		"fallback": "uix-sharp:goal-setting",
	});
}

export default Component;
