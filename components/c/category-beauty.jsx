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
		"content": `<style>.f3eqq_bsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 16h10v5.5H7Zm1.5-4.5h7V16h-7Zm1.25 0v-5l4.5-3v8");
}
</style><path class="f3eqq_bsw"/>`,
		"fallback": "uix-sharp:category-beauty",
	});
}

export default Component;
