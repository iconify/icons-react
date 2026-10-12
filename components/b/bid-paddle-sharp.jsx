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
		"content": `<style>.dcak_sbxt {
  d: path("M10.75 7.25L12.25 6v5.5m-1.5 4.25h2.5v5.5h-2.5z");
}

.w5c3o5b4m {
  cx: 12px;
  cy: 8.75px;
  r: 6px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="w5c3o5b4m"/><path class="dcak_sbxt"/></g>`,
		"fallback": "iconoven:bid-paddle-sharp",
	});
}

export default Component;
