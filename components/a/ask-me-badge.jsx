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
		"content": `<style>.p68ujbcck {
  d: path("M10 14.5c0-1 .75-1.5 2-1.5s2 .5 2 1.5s-2 1-2 2.25m0 2h.01M10.5 2.5h3v6h-3Z");
}

.sd83miq0f {
  d: path("M16.3 7H21v14.5H3V7h4.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sd83miq0f"/><path class="p68ujbcck"/></g>`,
		"fallback": "uix-sharp:ask-me-badge",
	});
}

export default Component;
