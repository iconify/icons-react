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
		"content": `<style>.k74i0kbev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.25H17m-14.5 5h5.3m-5.3 5h4.9m-4.9 5H9m1-7a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm8.5 3.5l3 3");
}
</style><path class="k74i0kbev"/>`,
		"fallback": "uix-sharp:full-text-search",
	});
}

export default Component;
