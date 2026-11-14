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
		"content": `<style>.n0q0gac6b {
  fill: currentColor;
  d: path("M16.5 14.25h3v2.25h2.25v3H19.5v2.25h-3V19.5h-2.25v-3h2.25Z");
}

.obhedbbfr {
  d: path("M11.4 15H3V2.5h13v8.9M9.5 15v6.5");
}

.p0ttb6bye {
  d: path("M7.25 12V5.5H10c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H7.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="obhedbbfr"/><path class="p0ttb6bye"/><path class="n0q0gac6b"/></g>`,
		"fallback": "uix-sharp:hospital-parking",
	});
}

export default Component;
