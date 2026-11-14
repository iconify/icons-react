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
		"content": `<style>.hj4dvybzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18l-1.75 7c-.25 1-1 1.5-2 1.5H6.75c-1 0-1.75-.5-2-1.5Zm1.5-4a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m8 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><path class="hj4dvybzk"/>`,
		"fallback": "uix:fruit-basket",
	});
}

export default Component;
