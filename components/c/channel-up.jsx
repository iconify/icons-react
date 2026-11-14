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
		"content": `<style>.c3r0iwb1n {
  d: path("M2.5 7.5h19V21h-19Zm5.5-5l4 5l4-5");
}

.j_58beb3y {
  d: path("m8.5 16l3.5-3.5l3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c3r0iwb1n"/><path class="j_58beb3y"/></g>`,
		"fallback": "uix-sharp:channel-up",
	});
}

export default Component;
