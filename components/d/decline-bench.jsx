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
		"content": `<style>.r6r-sbclq {
  d: path("m2.5 12l19-6.5V9l-19 6.5Zm2 7.5H7V14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yivntmbbl {
  d: path("M14.5 19.5H17v-9m-10 9h2.5m7.5 0h2.5");
}
</style><g class="ulnmmdpxh"><path class="r6r-sbclq"/><path class="yivntmbbl"/></g>`,
		"fallback": "uix-sharp:decline-bench",
	});
}

export default Component;
