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
		"content": `<style>.y8wi6kb4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H7m10 0h4.5M7 6.5l8 5.5l-8 5.5Zm8.5 0v11");
}
</style><path class="y8wi6kb4m"/>`,
		"fallback": "uix-sharp:diode",
	});
}

export default Component;
