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
		"content": `<style>.cr68jaceh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10v3l3.5 13h-7L12 9.5l-1.5 10h-7L7 6.5Zm0 3h10");
}
</style><path class="cr68jaceh"/>`,
		"fallback": "uix-sharp:culottes",
	});
}

export default Component;
