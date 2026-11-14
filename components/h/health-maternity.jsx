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
		"content": `<style>.ggc1sy86n {
  d: path("M9 8c0 3.5 1 5.5 4 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vra3dznrp {
  d: path("M7 2.5C7 6 5.5 8.5 5.5 12c0 3 1 5.5 1 9.5H12c0-2 .75-3.5 2-4.5c5.5-1.25 6-7.5.25-7.5c1.75-1 1.5-3.5-.75-4c-1.25-.5-1.75-1.5-1.75-3");
}
</style><g class="ulnmmdpxh"><path class="vra3dznrp"/><path class="ggc1sy86n"/></g>`,
		"fallback": "uix-sharp:health-maternity",
	});
}

export default Component;
