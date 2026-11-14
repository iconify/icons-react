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
		"content": `<style>.t_gsq7bkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 12h16l-1.5 9h-13Zm3-5.5h10M9.5 4L7 6.5L9.5 9");
}
</style><path class="t_gsq7bkk"/>`,
		"fallback": "uix-sharp:basket-return",
	});
}

export default Component;
