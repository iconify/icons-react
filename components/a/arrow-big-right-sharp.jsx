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
		"content": `<style>.zjrsl5b8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20.01 12.99l-6.77 6.77l-.99.99V15.5h-9v-7h9V3.25l.99.99l6.77 6.77l.99.99z");
}
</style><path class="zjrsl5b8t"/>`,
		"fallback": "iconoven:arrow-big-right-sharp",
	});
}

export default Component;
