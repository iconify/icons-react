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
		"content": `<style>.hpsb-rbtu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h19m-19 6h19m-15-7.5l3 3m0-3l-3 3m8-3l3 3m0-3l-3 3m-4 3l3 3m0-3l-3 3");
}
</style><path class="hpsb-rbtu"/>`,
		"fallback": "uix-sharp:barbed-wire",
	});
}

export default Component;
