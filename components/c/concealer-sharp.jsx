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
		"content": `<style>.cv78zv_tv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7.5H11v13.75H4.5zm0 3.5H11m5.25-8.25l1.65 1.875V5.6a1.65 1.65 0 0 1-3.3 0v-.975zm0 6.25v2.25m-2.25 0h4.5v10H14z");
}
</style><path class="cv78zv_tv"/>`,
		"fallback": "iconoven:concealer-sharp",
	});
}

export default Component;
