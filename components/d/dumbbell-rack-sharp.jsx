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
		"content": `<style>.bwvscfb5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75v18.5m16.5-18.5v18.5m-16.5-10.5h16.5m-16.5 10h16.5M6.75 3.25h2.5v5h-2.5zm8 0h2.5v5h-2.5zm-5.5 2.5h5.5m-8 7.5h2.5v5h-2.5zm8 0h2.5v5h-2.5zm-5.5 2.5h5.5");
}
</style><path class="bwvscfb5l"/>`,
		"fallback": "iconoven:dumbbell-rack-sharp",
	});
}

export default Component;
