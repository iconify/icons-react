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
		"content": `<style>.nh-liikwh {
  d: path("M20.5 5v14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5h14A1.5 1.5 0 0 1 20.5 5Zm-13 7h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpb3jfbzi {
  d: path("m12.5 8l4 4l-4 4");
}
</style><g class="ulnmmdpxh"><path class="nh-liikwh"/><path class="xpb3jfbzi"/></g>`,
		"fallback": "uix-sharp:arrow-right-square",
	});
}

export default Component;
