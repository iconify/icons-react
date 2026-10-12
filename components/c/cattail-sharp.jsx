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
		"content": `<style>.hwr88hbbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4.5H11V12H7.5zm6.75 3h3.5V14h-3.5zm-5 4.5v9.25m0-16.75V2.75M16 14v7.25M16 7.5V5.75m-3.5 15.5c.25-3.5-.25-6.5-1.25-8.75");
}
</style><path class="hwr88hbbl"/>`,
		"fallback": "iconoven:cattail-sharp",
	});
}

export default Component;
