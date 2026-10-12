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
		"content": `<style>.d89f8vncl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h4v14.5h-4zm14.5 0h4v14.5h-4zM2.75 9h4m-4 6h4m10.5-6h4m-4 6h4m-14.5-3h10.5");
}
</style><path class="d89f8vncl"/>`,
		"fallback": "iconoven:axle-sharp",
	});
}

export default Component;
