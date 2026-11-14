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
		"content": `<style>.sa8wa2hvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h15V6h-15Zm2 15.5h15v3.5h-15Zm0-12v12m11-12v12M8.75 8.75h4.5m-4.5 6.5h4.5M9.5 8.75l3 6.5m0-6.5l-3 6.5");
}
</style><path class="sa8wa2hvy"/>`,
		"fallback": "uix-sharp:fixed-term-contract",
	});
}

export default Component;
