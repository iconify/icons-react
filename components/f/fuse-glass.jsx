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
		"content": `<style>.dyocuybui {
  d: path("M8.5 12C10 9.75 11 14.25 12 12s2 2.25 3.5 0");
}

.sb45mzb_g {
  d: path("M6.5 8.5h11A1.5 1.5 0 0 1 19 10v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 14v-4a1.5 1.5 0 0 1 1.5-1.5Zm-4 3.5H5m14 0h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sb45mzb_g"/><path class="dyocuybui"/></g>`,
		"fallback": "uix-sharp:fuse-glass",
	});
}

export default Component;
