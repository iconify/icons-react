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
		"content": `<style>.fqr7fwb4w {
  d: path("M21 9h-4.5a2 2 0 0 0-2 2v1.5a2 2 0 0 0 2 2H21m-3.5-2.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wvuah0blh {
  d: path("M3 4.75h18v14.5H3Z");
}
</style><g class="ulnmmdpxh"><path class="wvuah0blh"/><path class="fqr7fwb4w"/></g>`,
		"fallback": "uix-sharp:account-basic",
	});
}

export default Component;
