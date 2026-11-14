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
		"content": `<style>.natott0oe {
  fill: currentColor;
  d: path("M2.5 7.5c4.5-5 8.5-1 12-4C17 2 19.5 2 21.5 2v2.5c-2 0-4.5 0-7 2c-3.5 3-7.5 2-12 4Zm0 10c4.5-2 8.5-1 12-4c2.5-2 5-2 7-2V15c-2 0-4.5 0-7 2c-3.5 3-7.5 2-12 4Z");
}

.qx_kuomfc {
  d: path("M2.5 14c4.5-2 8.5-1 12-4c2.5-2 5-2 7-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="natott0oe"/><path class="qx_kuomfc"/></g>`,
		"fallback": "uix-sharp:chart-confidence-band",
	});
}

export default Component;
