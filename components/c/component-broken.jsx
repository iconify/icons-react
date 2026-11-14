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
		"content": `<style>.fcw58tbcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l3.25 3.25L12 9L8.75 5.75ZM5.75 8.75L9 12l-3.25 3.25L2.5 12Zm12.5 0L21.5 12l-3.25 3.25L15 12Zm-3.638 6.696l1.942 4.166l-4.166 1.942l-1.942-4.166Z");
}
</style><path class="fcw58tbcf"/>`,
		"fallback": "uix-sharp:component-broken",
	});
}

export default Component;
