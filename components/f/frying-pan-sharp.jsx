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
		"content": `<style>.i7qtgsdka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 8c.75-.75-.75-1.75 0-2.5m4 2.5c.75-.75-.75-1.75 0-2.5m-8 5.25h12.5v6H2.75v-3.5ZM15.25 12h6");
}
</style><path class="i7qtgsdka"/>`,
		"fallback": "iconoven:frying-pan-sharp",
	});
}

export default Component;
