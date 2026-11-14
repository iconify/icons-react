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
		"content": `<style>.go7mwwwgr {
  d: path("M2.5 11Q4.75 9.5 7 11t4.5 0t4.5 0t4.5 0m-2.25 3.5v7M16 16.75l2.25-2.25l2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ycf4xwbfc {
  d: path("M3.5 4.5h10v10h-10Z");
}
</style><g class="ulnmmdpxh"><path class="ycf4xwbfc"/><path class="go7mwwwgr"/></g>`,
		"fallback": "uix-sharp:buoyancy",
	});
}

export default Component;
