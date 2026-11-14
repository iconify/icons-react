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
		"content": `<style>.b5cbdnb0i {
  d: path("M3.5 8.5a5.5 5.5 0 0 1 11 0c0 3-2.25 4-3 6c-.5 1.5-1.5 4-4 4c-1.75 0-3-1-3.5-2.25");
}

.mcx-5du9u {
  d: path("M6.25 8.5a2.75 2.75 0 0 1 5.5 0c0 1.25-1 1.75-2 2.5m5.75 4h5M18 15v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b5cbdnb0i"/><path class="mcx-5du9u"/></g>`,
		"fallback": "uix-sharp:hearing-loop",
	});
}

export default Component;
