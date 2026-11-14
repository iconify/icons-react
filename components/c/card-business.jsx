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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qmcqwy6jj {
  d: path("M6 7h9.25a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 7");
}

.va1qwubla {
  d: path("M5.5 4h14a2 2 0 0 1 2 2v10.5m-16 .5v-6.75h5V17ZM8 14.25V17m5.25-5.5H16m-2.75 3.25h2");
}
</style><g class="hntgybcog"><path class="qmcqwy6jj"/><path class="va1qwubla"/></g>`,
		"fallback": "uix:card-business",
	});
}

export default Component;
