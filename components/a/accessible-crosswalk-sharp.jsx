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
		"content": `<style>.nrdo5rblw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15h4v6.25h-4zM10 15h4v6.25h-4zm7.25 0h4v6.25h-4z");
}

.pxmn6eb9l {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 3.5h.01");
}

.q9pnr2wro {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 6v3.25h3.25l1 2.5M9.15 7.6A2.75 2.75 0 1 0 13 11.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="nrdo5rblw"/><path class="pxmn6eb9l"/><path class="q9pnr2wro"/></g>`,
		"fallback": "iconoven:accessible-crosswalk-sharp",
	});
}

export default Component;
