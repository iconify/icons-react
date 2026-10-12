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
		"content": `<style>.h94b_2xsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h4v14.5h-4zm0 14.5h18.5v4H2.75zm7.25 0V19m3.5-1.75V19m3.5-1.75V19");
}
</style><path class="h94b_2xsc"/>`,
		"fallback": "iconoven:carpenter-square-sharp",
	});
}

export default Component;
