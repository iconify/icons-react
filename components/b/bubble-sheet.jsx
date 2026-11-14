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
		"content": `<style>.hkkaixbjt {
  d: path("M7 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M7 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-5.5 5h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sqgzs9b2w {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5");
}
</style><g class="hntgybcog"><path class="sqgzs9b2w"/><path class="hkkaixbjt"/></g>`,
		"fallback": "uix:bubble-sheet",
	});
}

export default Component;
