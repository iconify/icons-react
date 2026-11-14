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
		"content": `<style>.zwxmx2bsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4H10c0 8 4 13 11 15.5C14 22 3.5 15 3.5 4Zm.25 3.5h6.5");
}
</style><path class="zwxmx2bsh"/>`,
		"fallback": "uix-sharp:drinking-horn",
	});
}

export default Component;
