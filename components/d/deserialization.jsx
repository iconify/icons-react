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
		"content": `<style>.lbqgvybyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 4a1.25 1.25 0 0 0-1.25 1.25v5.25l-1 1.5l1 1.5v5.25A1.25 1.25 0 0 0 16.5 20m2.75-16a1.25 1.25 0 0 1 1.25 1.25v5.25l1 1.5l-1 1.5v5.25A1.25 1.25 0 0 1 19.25 20M2.5 4H6v3.5H2.5Zm0 6.25H6v3.5H2.5Zm0 6.25H6V20H2.5Zm6.5-7l2.5 2.5L9 14.5");
}
</style><path class="lbqgvybyf"/>`,
		"fallback": "uix-sharp:deserialization",
	});
}

export default Component;
