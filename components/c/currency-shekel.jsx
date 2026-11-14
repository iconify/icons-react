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

.lidid4bmz {
  d: path("M18.5 4.5v15h-6A3.5 3.5 0 0 1 9 16V9");
}

.phr86grdn {
  d: path("M5.5 19.5v-15h6A3.5 3.5 0 0 1 15 8v7");
}
</style><g class="hntgybcog"><path class="phr86grdn"/><path class="lidid4bmz"/></g>`,
		"fallback": "uix:currency-shekel",
	});
}

export default Component;
