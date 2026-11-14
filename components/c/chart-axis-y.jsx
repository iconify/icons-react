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
		"content": `<style>.itfqj2icx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 21.5V3m-2.75 2.75L14 3l2.75 2.75M14 19h-4m4-5h-4m4-5h-4");
}
</style><path class="itfqj2icx"/>`,
		"fallback": "uix-sharp:chart-axis-y",
	});
}

export default Component;
