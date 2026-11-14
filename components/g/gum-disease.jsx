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
		"content": `<style>.oo8y4lblx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 10C4.75 7 5 2.75 8.5 2.75c1.5 0 2.25 1 3.5 1s2-1 3.5-1C19 2.75 19.25 7 17.75 10M4 10h16c0 3.5-3 6-8 6s-8-2.5-8-6Zm5 5.5l1 5.75m5-5.75l-1 5.75");
}
</style><path class="oo8y4lblx"/>`,
		"fallback": "uix-sharp:gum-disease",
	});
}

export default Component;
