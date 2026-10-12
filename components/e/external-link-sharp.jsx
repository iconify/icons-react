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
		"content": `<style>.whpp9nb0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3.75H3.75v16.5h16.5V13m-6-9.25h6v6m0-6L11.5 12.5");
}
</style><path class="whpp9nb0d"/>`,
		"fallback": "iconoven:external-link-sharp",
	});
}

export default Component;
