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
		"content": `<style>.im1o2_bki {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 21.25V16.5h3.5v4.75");
}

.krk84zbai {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20.5V13l.63-.41l3.74-2.43l.63-.41v-1l.58-.48l1.84-1.54l.58-.48l.58.48l1.84 1.54l.58.48v1l.63.41l3.74 2.43l.63.41v8.25H4zm8-14.25v-3.5m-1.5 1.5h3");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="krk84zbai"/><path class="to8m3ibcr"/><path class="im1o2_bki"/></g>`,
		"fallback": "iconoven:church-sharp",
	});
}

export default Component;
