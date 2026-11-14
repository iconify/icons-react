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
		"content": `<style>.e249izb5g {
  d: path("M2.5 7V4.5a2 2 0 0 1 2-2H7m10 0h2.5a2 2 0 0 1 2 2V7m0 10v2.5a2 2 0 0 1-2 2H17m-10 0H4.5a2 2 0 0 1-2-2V17m3-9.5h13v9h-13Z");
}

.sr11qub9y {
  d: path("M8 13.75c1-2.75 1.75-3.5 2.5-3.25s0 3.25 1.25 3.25c1 0 1.75-2 2.5-2S15 13 16 13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e249izb5g"/><path class="sr11qub9y"/></g>`,
		"fallback": "uix-sharp:cheque-capture-back",
	});
}

export default Component;
