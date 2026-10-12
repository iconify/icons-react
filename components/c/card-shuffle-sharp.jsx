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
		"content": `<style>.prh864bgn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 6.75q5.25-5 10.5 0m0-2.5v2.5h-2.5m-8-2.5v2.5h2.5M3 10h7.5v11.25H3zm10.5 0H21v11.25h-7.5z");
}
</style><path class="prh864bgn"/>`,
		"fallback": "iconoven:card-shuffle-sharp",
	});
}

export default Component;
