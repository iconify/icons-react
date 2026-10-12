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
		"content": `<style>.z6oln7lxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13h12v7H6zm3 3.5h6m-.5-3.5l-5-8m0 8l5-8");
}
</style><path class="z6oln7lxd"/>`,
		"fallback": "iconoven:crossed-fingers-sharp",
	});
}

export default Component;
