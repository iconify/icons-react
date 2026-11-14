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
		"content": `<style>.bvorjobbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h6.5V9H5Zm10.748 10H5L2.5 9h19l-.68 1.224M18.5 13v8.5m-3-3a3 3 0 0 0 6 0m-4.5-2h3");
}
</style><path class="bvorjobbl"/>`,
		"fallback": "uix-sharp:anchor-handler",
	});
}

export default Component;
