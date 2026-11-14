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
		"content": `<style>.lp-vanb_y {
  d: path("M8 12a3.25 3.25 0 1 1 4 4a4.5 4.5 0 1 1-4-4Zm5.5-1.5l3.75-3.75m1.854-3.975l2.121 2.121l-2.829 2.829l-2.121-2.121Z");
}

.u3fq0ebgr {
  d: path("M6 16.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lp-vanb_y"/><path class="u3fq0ebgr"/></g>`,
		"fallback": "uix-sharp:acoustic-guitar",
	});
}

export default Component;
