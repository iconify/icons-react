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
		"content": `<style>.ypjdahb7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 5l7.5 13.5h-15Zm0 5.25v2.5m0 3h.01M3 8.75a9.5 9.5 0 0 0 0 6.5m18-6.5a9.5 9.5 0 0 1 0 6.5");
}
</style><path class="ypjdahb7j"/>`,
		"fallback": "uix-sharp:cell-broadcast-alert",
	});
}

export default Component;
