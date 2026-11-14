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
		"content": `<style>.ydiccmlzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.5 2.5l-6.5 11h4.5l-1.5 8l7.5-11H16ZM4 8h5.5M3 12h4.5m-3 4h4");
}
</style><path class="ydiccmlzb"/>`,
		"fallback": "uix-sharp:flash-rear-curtain",
	});
}

export default Component;
