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
		"content": `<style>.i0x91lukr {
  d: path("m2.5 6l9 5.5l9-5.5M18 14.5v7M14.5 18h7");
}

.oh6bzhbbg {
  d: path("M11.7 17H2.5V3.5h18v8.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oh6bzhbbg"/><path class="i0x91lukr"/></g>`,
		"fallback": "uix-sharp:accountant-invite",
	});
}

export default Component;
