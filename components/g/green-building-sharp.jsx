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
		"content": `<style>.vjfbyyblj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75h10.5v14.5H2.75zM6 10.5h4M6 14h4m-4 3.5h4m5.75-4.5h5.5v8.25h-5.5zm.5-2.75c0-3.25 1.5-5.9 4.5-6.75c.25 3.25-1.5 6.1-4.5 6.75Z");
}
</style><path class="vjfbyyblj"/>`,
		"fallback": "iconoven:green-building-sharp",
	});
}

export default Component;
