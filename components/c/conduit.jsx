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
		"content": `<style>.o2a7-ybvz {
  d: path("M3 20.5h9a8 8 0 0 0 8-8V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xkc4h9bgz {
  d: path("M3 15.5h9a3 3 0 0 0 3-3V7M3 15.5v5m10.75-17h7.5V7h-7.5Z");
}
</style><g class="ulnmmdpxh"><path class="o2a7-ybvz"/><path class="xkc4h9bgz"/></g>`,
		"fallback": "uix-sharp:conduit",
	});
}

export default Component;
