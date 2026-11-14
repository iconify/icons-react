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
		"content": `<style>.ojb08-bhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5V21m0-6.5a6 6.5 0 1 0 12 0a6 6.5 0 1 0-12 0Z");
}
</style><path class="ojb08-bhj"/>`,
		"fallback": "uix-sharp:counter-shape",
	});
}

export default Component;
