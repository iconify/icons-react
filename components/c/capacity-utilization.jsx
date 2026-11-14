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
		"content": `<style>.e0beztq-y {
  d: path("M5 7.25q3.5-1.75 7 0t7 0M5 12h2.5M5 16h2.5");
}

.q0f-lgkcm {
  d: path("M5 2.5h14v19H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q0f-lgkcm"/><path class="e0beztq-y"/></g>`,
		"fallback": "uix-sharp:capacity-utilization",
	});
}

export default Component;
