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
		"content": `<style>.hf-4g3h_o {
  d: path("M9.5 11.5L7 14l2.5 2.5m5-5L17 14l-2.5 2.5");
}

.k0v1t97jg {
  d: path("M3 21.5V11a9 9 0 0 1 18 0v10.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k0v1t97jg"/><path class="hf-4g3h_o"/></g>`,
		"fallback": "uix-sharp:api-gateway",
	});
}

export default Component;
