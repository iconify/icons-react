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
		"content": `<style>.zk5c9n6ic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19v11.75h-19Zm0 4h19m-16 4h4m-6.5 9h17.5M18 17l2.5 2.5L18 22");
}
</style><path class="zk5c9n6ic"/>`,
		"fallback": "uix-sharp:credit-card-swipe",
	});
}

export default Component;
