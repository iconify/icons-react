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
		"content": `<style>.k0l5g1bap {
  d: path("M4 2.5h16v15H4Zm2.5 15v4m11-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xvguqcc_h {
  d: path("M7.5 5.5h3v9h-3Zm6 0h3v9h-3Z");
}
</style><g class="ulnmmdpxh"><path class="k0l5g1bap"/><path class="xvguqcc_h"/></g>`,
		"fallback": "uix-sharp:checkout-impulse-rack",
	});
}

export default Component;
