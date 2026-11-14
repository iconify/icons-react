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
		"content": `<style>.saieno8wx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.016 19H2.5V9.5l8-6.5l8 6.5v1.484M7.75 10v9m5.5-9v8m3.5-.25V15a1.25 1.25 0 0 1 2.5 0v2.75a2.25 2.25 0 1 1-2.5 0Z");
}
</style><path class="saieno8wx"/>`,
		"fallback": "uix-sharp:climate-control",
	});
}

export default Component;
