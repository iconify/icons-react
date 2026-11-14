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
		"content": `<style>.dffmec2yo {
  d: path("M11.778 17H2.5l8-14l7.266 11.967");
}

.djbhmab0x {
  d: path("m9 17l1.5-4.5l1.441 4.323M2.5 20H10m4.75-2l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dffmec2yo"/><path class="djbhmab0x"/></g>`,
		"fallback": "uix-sharp:campsite-available",
	});
}

export default Component;
