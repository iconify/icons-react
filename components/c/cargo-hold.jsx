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
		"content": `<style>.hcnhnpb0p {
  d: path("M5.5 15h8v6h-8Zm4-5.5h6V15h-6Z");
}

.p45lujqbc {
  d: path("M3 21v-9.5a9 9 0 0 1 18 0V21Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p45lujqbc"/><path class="hcnhnpb0p"/></g>`,
		"fallback": "uix-sharp:cargo-hold",
	});
}

export default Component;
