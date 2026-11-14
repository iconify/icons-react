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
		"content": `<style>.dy5rlwbrl {
  d: path("M4.5 10V9c0-1.25 1.25-2 3-2c2 0 2.5-2.5 4.5-2.5S14.5 7 16.5 7c1.75 0 3 .75 3 2v1");
}

.mrdjpnb7x {
  d: path("M2.5 12a2 2 0 0 1 4 0v2.5h11V12a2 2 0 0 1 4 0v5.5A1.5 1.5 0 0 1 20 19H4a1.5 1.5 0 0 1-1.5-1.5ZM5 19v1.5M19 19v1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mrdjpnb7x"/><path class="dy5rlwbrl"/></g>`,
		"fallback": "uix-sharp:camelback-sofa",
	});
}

export default Component;
