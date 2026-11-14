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
		"content": `<style>.r3csmzb4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.244 20.5H3.5v-10L12 3.25l8.5 7.25v.656M16.25 18.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM18.5 14h.01M14 18.5h.01m1.24-3.25h.01");
}
</style><path class="r3csmzb4c"/>`,
		"fallback": "uix-sharp:house-sun",
	});
}

export default Component;
