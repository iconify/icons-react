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
		"content": `<style>.c6jrm--lm {
  d: path("M16.25 10.25C16 9.5 15.4 9 14.5 9c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1m1.75-6.25V9m0 6v1.25");
}

.hpxamsdro {
  d: path("M2.5 12L8 5h13v14H8Zm5 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hpxamsdro"/><path class="c6jrm--lm"/></g>`,
		"fallback": "uix-sharp:adr",
	});
}

export default Component;
