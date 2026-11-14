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
		"content": `<style>.ibhwheuqd {
  fill: currentColor;
  d: path("M18 21.25s-3.5-2.25-3.5-4.5c0-1 .75-2 1.75-2c.75 0 1.5.5 1.75 1c.25-.5 1-1 1.75-1c1 0 1.75 1 1.75 2c0 2.25-3.5 4.5-3.5 4.5Z");
}

.p45-w4b2b {
  d: path("M12.975 13.5H2.5c0-5.25 4.25-9 8-9c3.401 0 7.213 3.084 7.893 7.575M10.5 13.5l3-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p45-w4b2b"/><path class="ibhwheuqd"/></g>`,
		"fallback": "uix-sharp:heart-risk-score",
	});
}

export default Component;
