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
		"content": `<style>.hix1tbl6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19v3H19c-2 0-3.25 1.5-3.25 3.5v4m-7.5 0v-4c0-3-2.75-4-5.75-6.5M5 15h14v4.5H5Z");
}
</style><path class="hix1tbl6q"/>`,
		"fallback": "uix-sharp:anvil",
	});
}

export default Component;
