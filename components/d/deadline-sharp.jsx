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
		"content": `<style>.f6tki2u5h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 7v4.5L14 13m3.75 1.25v3.25");
}

.pgc2z3y8t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 20.25h.01");
}

.u6np9vxqi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.25 11.5a8.75 8.75 0 1 0-8.75 8.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="u6np9vxqi"/><path class="f6tki2u5h"/><path class="pgc2z3y8t"/></g>`,
		"fallback": "iconoven:deadline-sharp",
	});
}

export default Component;
