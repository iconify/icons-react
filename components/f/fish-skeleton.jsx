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
		"content": `<style>.j6v0asvmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 7.5c3.5 0 5 2.5 5 4.5s-1.5 4.5-5 4.5ZM4.5 12h12m-9-3v6m3-6.5v7m3-7.5v8m-11-7.5l2 3.5l-2 3.5");
}
</style><path class="j6v0asvmu"/>`,
		"fallback": "uix-sharp:fish-skeleton",
	});
}

export default Component;
