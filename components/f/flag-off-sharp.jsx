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
		"content": `<style>.mirtvcp_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 4.5c2-1 4-1.25 6.75 0s4.75 1 7.5 0v9.75c-2.75 1-4.75 1.25-7.5 0s-4.75-1-6.75 0Zm0 16.75V3.75");
}
</style><path class="mirtvcp_c"/>`,
		"fallback": "iconoven:flag-off-sharp",
	});
}

export default Component;
