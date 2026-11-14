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
		"content": `<style>.h8-33f5qx {
  d: path("M6 9.5c-3 3.5-2.5 12 6 12s9-8.5 6-12");
}

.skqwaecuv {
  d: path("M6 9.5a6 1.75 0 1 0 12 0a6 1.75 0 1 0-12 0Zm7 0l3.5-7M7 13q-.25 2.5.75 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h8-33f5qx"/><path class="skqwaecuv"/></g>`,
		"fallback": "uix-sharp:coconut-water",
	});
}

export default Component;
