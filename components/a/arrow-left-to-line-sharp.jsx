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
		"content": `<style>.ybgbqpbvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.25 12h-12m5.25-5.25L8.25 12l5.25 5.25M3.75 4.75v14.5");
}
</style><path class="ybgbqpbvn"/>`,
		"fallback": "iconoven:arrow-left-to-line-sharp",
	});
}

export default Component;
