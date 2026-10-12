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
		"content": `<style>.t9bo3hczl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.25L5.5 6v10m3-10H13v10H8.5zm7 0H20v10h-4.5zm-12 12.75h17M6 21.25h12");
}
</style><path class="t9bo3hczl"/>`,
		"fallback": "iconoven:hundred-sharp",
	});
}

export default Component;
