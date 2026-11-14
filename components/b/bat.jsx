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
		"content": `<style>.qipl7-hzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 18q-1-3.5-2.5-3.5q-2-2.5-4-1q-.5-3-2.5-5c2-1 5-.5 7.5 1.5l-.75-4.5L11.5 8h1l1.75-2.5l-.75 4.5C16 8 19 7.5 21 8.5q-2 2-2.5 5q-2-1.5-4 1q-1.5 0-2.5 3.5m-1.25-6.25h.01m2.49 0h.01");
}
</style><path class="qipl7-hzx"/>`,
		"fallback": "uix:bat",
	});
}

export default Component;
