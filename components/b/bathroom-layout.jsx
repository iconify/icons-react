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
		"content": `<style>.e28tbrbxb {
  d: path("M14.25 12.25a2 3.25 0 1 0 4 0a2 3.25 0 1 0-4 0Z");
}

.h6htdwbeh {
  d: path("M5.5 6H10v12H5.5ZM14 6h4.5v3H14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yudiqacsm {
  d: path("M2.5 3h19v18h-19Z");
}
</style><g class="ulnmmdpxh"><path class="yudiqacsm"/><path class="h6htdwbeh"/><path class="e28tbrbxb"/></g>`,
		"fallback": "uix-sharp:bathroom-layout",
	});
}

export default Component;
