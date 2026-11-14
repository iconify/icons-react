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
		"content": `<style>.bmgspob9t {
  d: path("m15.25 6.5l2.5 2.5l2.5-2.5");
}

.sdkku5bwh {
  d: path("M2.5 11.75h5l2.5 2.5v7H2.5Zm11.5 0h5l2.5 2.5v7H14ZM6.25 8.5a5.75 5.75 0 0 1 11.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sdkku5bwh"/><path class="bmgspob9t"/></g>`,
		"fallback": "uix-sharp:balance-carried-forward",
	});
}

export default Component;
