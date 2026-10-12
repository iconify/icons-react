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
		"content": `<style>.d92ep-z3x {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.37 15.5c3.5 2 9.76 2 13.26 0");
}

.ldrcttbln {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.5 9h.01m2.99 2h.01M10 12.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xoaa4o_lm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c3.75 0 7 5.6 7 10.5a7 7 0 0 1-14 0c0-4.9 3.25-10.5 7-10.5Z");
}
</style><g class="ux2u0rbkq"><path class="xoaa4o_lm"/><path class="d92ep-z3x"/><path class="ldrcttbln"/></g>`,
		"fallback": "iconoven:beauty-blender-sharp",
	});
}

export default Component;
