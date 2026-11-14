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
		"content": `<style>.hx1kbhufm {
  d: path("M16.25 15.25q1 1 .75 2.25");
}

.kvs-dquzx {
  d: path("M6.5 2.5v9q-3 2.25-3 6c0 2 1.5 3 3.5 3h11.5c2 0 2.75-1.75 2-3s-2.5-1.75-5-2.5s-4-2.5-4-5V2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kvs-dquzx"/><path class="hx1kbhufm"/></g>`,
		"fallback": "uix-sharp:foot-side",
	});
}

export default Component;
