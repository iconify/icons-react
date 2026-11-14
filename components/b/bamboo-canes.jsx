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
		"content": `<style>.j9k1n-bbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5H7v18H2.5Zm7.25-1h4.5v19h-4.5Zm7.25 1h4.5v18H17Zm-14.5 4H7m2.75 9h4.5m2.75-9h4.5m-19 9H7M9.75 7h4.5M17 16.5h4.5M2.5 12h19");
}
</style><path class="j9k1n-bbv"/>`,
		"fallback": "uix-sharp:bamboo-canes",
	});
}

export default Component;
