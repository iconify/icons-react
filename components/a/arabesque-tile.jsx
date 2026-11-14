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
		"content": `<style>.ezc8ddbtc {
  d: path("m12 5.5l2 2h2.5V10l2 2l-2 2v2.5H14l-2 2l-2-2H7.5V14l-2-2l2-2V7.5H10Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yqwllmqht {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v12a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18V6A3.5 3.5 0 0 1 6 2.5");
}
</style><g class="hntgybcog"><path class="yqwllmqht"/><path class="ezc8ddbtc"/></g>`,
		"fallback": "uix:arabesque-tile",
	});
}

export default Component;
