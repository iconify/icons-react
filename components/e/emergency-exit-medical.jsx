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
		"content": `<style>.k1866vbth {
  d: path("M3 21V4.5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2V7m0 5v1.7M7.5 9.5h10M15 7l2.5 2.5l-1.955 1.955M10 14h.01");
}

.n0q0gac6b {
  fill: currentColor;
  d: path("M16.5 14.25h3v2.25h2.25v3H19.5v2.25h-3V19.5h-2.25v-3h2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k1866vbth"/><path class="n0q0gac6b"/></g>`,
		"fallback": "uix-sharp:emergency-exit-medical",
	});
}

export default Component;
