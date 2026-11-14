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
		"content": `<style>.fyxq-r3yg {
  d: path("M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm8 9.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.gp74vlbdw {
  d: path("M5.25 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm8.5 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM9 9l3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fyxq-r3yg"/><path class="gp74vlbdw"/></g>`,
		"fallback": "uix-sharp:connecting-rod",
	});
}

export default Component;
