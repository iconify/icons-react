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
		"content": `<style>.ko9ot6bkl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h19M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2.5 6l2 5h7l2-5m-8 5v5m5-5v5");
}
</style><path class="ko9ot6bkl"/>`,
		"fallback": "uix-sharp:chin-up",
	});
}

export default Component;
