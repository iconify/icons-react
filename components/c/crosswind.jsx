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
		"content": `<style>.x14nh4bbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 21V3M13 6.5L16.5 3L20 6.5M3.5 10h9m-9 5h9");
}
</style><path class="x14nh4bbt"/>`,
		"fallback": "uix-sharp:crosswind",
	});
}

export default Component;
