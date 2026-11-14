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
		"content": `<style>.c4xxsxb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20.5h16m-6-17L19.5 9L16 12.5L10.5 7Zm-1.5 6L5 17m0 0l2.5 2.5");
}
</style><path class="c4xxsxb9e"/>`,
		"fallback": "uix-sharp:auction",
	});
}

export default Component;
