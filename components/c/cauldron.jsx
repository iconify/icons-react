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
		"content": `<style>.mnmrugb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.5h16m-14.5 0a7 7 0 1 0 13 0m-11 8l-.75 3m9.75-3l.75 3m-5.25 5c-2.5 0-2.5-2 0-3.5c2.5 1.5 2.5 3.5 0 3.5Zm-2-19h.01");
}
</style><path class="mnmrugb0m"/>`,
		"fallback": "uix-sharp:cauldron",
	});
}

export default Component;
