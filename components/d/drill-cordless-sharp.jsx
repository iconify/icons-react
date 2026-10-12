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
		"content": `<style>.sxcrfewzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 3.5h-10V10H7l.15 1.49l.45 4.27l.15 1.49h4.5l-.15-1.49l-.45-4.27L11.5 10h4.25V3.5zm1.5 1.25h3.5v4h-3.5zm3.5 2h2M4.5 17.25H15v4H4.5z");
}
</style><path class="sxcrfewzz"/>`,
		"fallback": "iconoven:drill-cordless-sharp",
	});
}

export default Component;
