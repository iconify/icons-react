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
		"content": `<style>.h9y3tubng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-3 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-3-10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm12.5-4.25l3 2.5m1.75 4.75l-1.5 4m-3.75 3h-4m-5.25-7l1.5 4m.25-8.75l3-2.5");
}
</style><path class="h9y3tubng"/>`,
		"fallback": "uix-sharp:decentralized-network",
	});
}

export default Component;
