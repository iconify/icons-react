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
		"content": `<style>.zt29esibx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19M7 3.5V20M17 3.5V20M2.5 15.5L7 4.5q5 12.5 10 0l4.5 11");
}
</style><path class="zt29esibx"/>`,
		"fallback": "uix-sharp:bridge-model",
	});
}

export default Component;
