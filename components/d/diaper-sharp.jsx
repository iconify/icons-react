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
		"content": `<style>.myb-zubdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 6.25h15.5v5.25h-4v9.75h-8.5V11.5h-4V6.25zM3.75 9h16.5");
}
</style><path class="myb-zubdi"/>`,
		"fallback": "iconoven:diaper-sharp",
	});
}

export default Component;
