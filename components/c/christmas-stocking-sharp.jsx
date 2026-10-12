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
		"content": `<style>.c3wuwdpbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75h9v3.5H7zm2.5 3.5H15v7l1.21.89l2.33 1.72l1.21.89l-.88 1.22l-1.49 2.06l-.88 1.22l-1.21-.89l-6.08-4.47L8 15V6.25z");
}
</style><path class="c3wuwdpbz"/>`,
		"fallback": "iconoven:christmas-stocking-sharp",
	});
}

export default Component;
