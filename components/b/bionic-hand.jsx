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
		"content": `<style>.o6za38bpe {
  d: path("M11.25 16.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm2.5 0H15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zmq3jcxbg {
  d: path("M17 12v3.5c0 3.25-2.25 6-5.25 6c-2.75 0-4.25-1.25-5.5-3.25l-2.5-3.75c-.5-1 0-2 1-2.25c.75-.25 1.5.25 2 1l2 2.25v-4m0-1.25V9m0-1.5V6m3 3.5v-2m0-1.5V4m3 5.5V8m0-1.5V4.75M17 10.5V9.25m0-1.5V7");
}
</style><g class="ulnmmdpxh"><path class="zmq3jcxbg"/><path class="o6za38bpe"/></g>`,
		"fallback": "uix-sharp:bionic-hand",
	});
}

export default Component;
