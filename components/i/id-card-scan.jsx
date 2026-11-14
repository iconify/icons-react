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
		"content": `<style>.iy6gk921i {
  d: path("M2.5 7V4.5a2 2 0 0 1 2-2H7m10 0h2.5a2 2 0 0 1 2 2V7m0 10v2.5a2 2 0 0 1-2 2H17m-10 0H4.5a2 2 0 0 1-2-2V17M5.25 6.75h13.5v10.5H5.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zd4b__rud {
  d: path("M8 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.75-1.5H16m-2.25 3H16");
}
</style><g class="ulnmmdpxh"><path class="iy6gk921i"/><path class="zd4b__rud"/></g>`,
		"fallback": "uix-sharp:id-card-scan",
	});
}

export default Component;
