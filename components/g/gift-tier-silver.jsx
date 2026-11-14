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
		"content": `<style>.ife_ybbjm {
  d: path("M5.75 15a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0ZM6.5 2.75l3 6.5m8-6.5l-3 6.5");
}

.q2ctqob9f {
  d: path("m12 11.75l.882 2.036l2.209.21l-1.664 1.468l.483 2.165L12 16.5l-1.91 1.129l.483-2.165l-1.664-1.468l2.209-.21Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ife_ybbjm"/><path class="q2ctqob9f"/></g>`,
		"fallback": "uix-sharp:gift-tier-silver",
	});
}

export default Component;
