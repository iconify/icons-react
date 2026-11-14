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
		"content": `<style>.jycpukbom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5h19V20h-19Zm6 0c0-5 7-5 7 0m-9 0V20m11-11.5V20m-11-7.5h11");
}
</style><path class="jycpukbom"/>`,
		"fallback": "uix-sharp:gym-bag",
	});
}

export default Component;
