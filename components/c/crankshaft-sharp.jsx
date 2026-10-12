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
		"content": `<style>.m8e9drbnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12h2.5V6.75H11v10.5h3V6.75h3.5V12h3.75M2.75 8.75H5v6.5H2.75z");
}
</style><path class="m8e9drbnm"/>`,
		"fallback": "iconoven:crankshaft-sharp",
	});
}

export default Component;
