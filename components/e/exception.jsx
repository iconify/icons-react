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
		"content": `<style>.our1xplis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.727 17.384l5.657-5.657l3.889 3.889l-5.657 5.657Zm12.465-5.535l-3.465-3.465l5.657-5.657l3.889 3.889l-5.091 5.091M8 8l2.25 2.25M18 14.5V18m0 3h.01");
}
</style><path class="our1xplis"/>`,
		"fallback": "uix-sharp:exception",
	});
}

export default Component;
