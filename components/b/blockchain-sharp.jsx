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
		"content": `<style>.fga2c7b4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h7v7h-7zm11.5 0h7v7h-7zM8.5 14.25h7v7h-7zm1.25-8h4.5m-8 3.5l3.5 4.5m8-4.5l-3.5 4.5");
}
</style><path class="fga2c7b4u"/>`,
		"fallback": "iconoven:blockchain-sharp",
	});
}

export default Component;
