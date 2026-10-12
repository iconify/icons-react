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
		"content": `<style>.du4790boy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.25 17.75h.01m2.74 0h.01m7.99 0h.01m2.74 0h.01m-8.26-10h.01m2.99 0h.01");
}

.lkzlbybkz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.25h7.75v7H2.75zm10.75 0h7.75v7H13.5zm-5.75-10h8.5v7h-8.5z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="lkzlbybkz"/><path class="du4790boy"/></g>`,
		"fallback": "iconoven:brick-stack-sharp",
	});
}

export default Component;
