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
		"content": `<style>.c17at9ldc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 12.25h.01m6.49 0h.01");
}

.f51joljgj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 14.75h3l-1.5 2.5Z");
}

.u5ikqvroq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.25 3.75l4 3.5h7.5l4-3.5V13a7.75 7.75 0 0 1-15.5 0Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="u5ikqvroq"/><path class="f51joljgj"/><path class="c17at9ldc"/></g>`,
		"fallback": "iconoven:cat-sharp",
	});
}

export default Component;
