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
		"content": `<style>.g_s-lzb5n {
  d: path("M11.9 19H3V2.5h13V12");
}

.rqphtbcee {
  d: path("M8.5 8L6 10.75l2.5 2.75m2-5.5l2.5 2.75l-2.5 2.75m5 2.5l3-2.5l3 2.5m-6 3l3 2.5l3-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g_s-lzb5n"/><path class="rqphtbcee"/></g>`,
		"fallback": "uix-sharp:code-expand-all",
	});
}

export default Component;
