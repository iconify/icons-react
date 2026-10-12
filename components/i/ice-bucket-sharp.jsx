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
		"content": `<style>.p2uygm86d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6.25h4.5v4.5H6zm7.5 0H18v4.5h-4.5zm-7.75 4.5h14l-.25 1.48l-1.25 7.54l-.25 1.48H6l-.25-1.48l-1.25-7.54l-.25-1.48zm-1 3.25h14.5");
}
</style><path class="p2uygm86d"/>`,
		"fallback": "iconoven:ice-bucket-sharp",
	});
}

export default Component;
