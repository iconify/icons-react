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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nzbu1hbra {
  d: path("M7.375 2.5h9.25A4.375 4.375 0 0 1 21 6.875v6.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 13.125v-6.25A4.375 4.375 0 0 1 7.375 2.5M12 17.5v4");
}

.vhqmbibcr {
  d: path("M6 8h8a1.25 1.25 0 1 0-1.25-1.25M6 11h6m-6 3h10a1.25 1.25 0 1 0-1.25-1.25");
}
</style><g class="hntgybcog"><path class="nzbu1hbra"/><path class="vhqmbibcr"/></g>`,
		"fallback": "uix:crosswinds-sign",
	});
}

export default Component;
