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
		"content": `<style>.opadhbckl {
  d: path("M18.5 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.t2p9h3bkv {
  d: path("M3.5 4h14l-3 4.75l3 4.75h-14Zm0-1v18M14 16.5h8v5h-8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t2p9h3bkv"/><path class="opadhbckl"/></g>`,
		"fallback": "uix-sharp:feature-flag-service",
	});
}

export default Component;
