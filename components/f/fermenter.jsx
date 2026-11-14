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
		"content": `<style>.onc535byd {
  d: path("M6.5 21.5V6h11v15.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w6_rv_dto {
  d: path("m6.5 13.5l4 4h3l4-4m-5.5 4V20M10 6V2.5h4.5");
}
</style><g class="ulnmmdpxh"><path class="onc535byd"/><path class="w6_rv_dto"/></g>`,
		"fallback": "uix-sharp:fermenter",
	});
}

export default Component;
