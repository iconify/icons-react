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

.lmbo0oiji {
  fill: currentColor;
  d: path("M3 9V6a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 6v3Z");
}

.plkttnbkq {
  d: path("M3 9v9a2.5 2.5 0 0 0 2.5 2.5h13A2.5 2.5 0 0 0 21 18V9M3 14.75h18M10 9v11.5");
}
</style><g class="hntgybcog"><path class="lmbo0oiji"/><path class="plkttnbkq"/></g>`,
		"fallback": "uix:dataset",
	});
}

export default Component;
