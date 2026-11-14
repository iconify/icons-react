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
		"content": `<style>.ajmeehv7u {
  d: path("M5.5 5.5h6v6h-6Z");
}

.fvr-uoklt {
  d: path("M5.5 2.5v19m-3-16h19m-16 0h15v15h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fvr-uoklt"/><path class="ajmeehv7u"/></g>`,
		"fallback": "uix-sharp:align-to-artboard",
	});
}

export default Component;
