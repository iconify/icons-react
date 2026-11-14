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
		"content": `<style>.gwf5edc8z {
  d: path("M9.5 5.75C8 8.5 8 11.5 9.5 14.25M14.75 18l2 2L21 15.75");
}

.pdwm_h1wm {
  d: path("M4.5 10a5 7.5 0 1 0 10 0a5 7.5 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pdwm_h1wm"/><path class="gwf5edc8z"/></g>`,
		"fallback": "uix-sharp:certified-seed",
	});
}

export default Component;
