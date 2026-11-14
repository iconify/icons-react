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
		"content": `<style>.saogqm4vu {
  d: path("M12.2 19H3V2.5h13v10.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y6h75vxkq {
  d: path("m8 8l-2 2.5L8 13m3-5l2 2.5l-2 2.5m4 2.5h6m-3.5 3H21m-6 3h6");
}
</style><g class="ulnmmdpxh"><path class="saogqm4vu"/><path class="y6h75vxkq"/></g>`,
		"fallback": "uix-sharp:code-format",
	});
}

export default Component;
