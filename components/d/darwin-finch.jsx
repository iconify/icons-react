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
		"content": `<style>.nup9icrfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 8.75l3.25-2.5C8 4.25 11.5 4 13 6.25C14.5 8 16.5 9.5 18 11.5l3 4.5l-2.25 1l-2.25-1.75C14 17.5 9 17.5 7.25 14.5c-1-1.75-.75-3.25-.5-3.75Zm6.25-1h.01m1.74 9V20m-6 0H19");
}
</style><path class="nup9icrfr"/>`,
		"fallback": "uix-sharp:darwin-finch",
	});
}

export default Component;
