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
		"content": `<style>.f2pvfrbfp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H10v7.5H2.5Zm10 13.5H12V9h7.5v4.6M6.25 10.5v2.25H12m2.5 5.75c1.75-3 5.25-3 7 0c-1.75 3-5.25 3-7 0Zm3.5 0h.01");
}
</style><path class="f2pvfrbfp"/>`,
		"fallback": "uix-sharp:dependency-review",
	});
}

export default Component;
