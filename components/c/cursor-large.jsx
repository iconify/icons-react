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
		"content": `<style>.p69anf7mt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3v15.5l3.75-3.5l2.5 5.5l2.25-1l-2.5-5.5h5Z");
}
</style><path class="p69anf7mt"/>`,
		"fallback": "uix-sharp:cursor-large",
	});
}

export default Component;
