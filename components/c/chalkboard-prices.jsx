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
		"content": `<style>.awq9_lbiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h15v12h-15Zm2 12l-2 6.5m13-6.5l2 6.5M7.5 7h9m-9 4H13");
}
</style><path class="awq9_lbiv"/>`,
		"fallback": "uix-sharp:chalkboard-prices",
	});
}

export default Component;
