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
		"content": `<style>.h9b68curu {
  d: path("M15.2 20.5H2.5V4h17v7.7M7 2.5V6m8-3.5V6M2.5 9h17");
}

.s91mm_bsa {
  d: path("M6 12.25h4.5v4.5H6Zm12 2.25V18m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h9b68curu"/><path class="s91mm_bsa"/></g>`,
		"fallback": "uix-sharp:grant-deadline",
	});
}

export default Component;
