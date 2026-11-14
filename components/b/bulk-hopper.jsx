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
		"content": `<style>.jljpntbhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16V11l-5.5 5.5h-5L4 11Zm6.25 13v4h3.5v-4");
}
</style><path class="jljpntbhc"/>`,
		"fallback": "uix-sharp:bulk-hopper",
	});
}

export default Component;
