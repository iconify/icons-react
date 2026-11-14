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
		"content": `<style>.qnj07mblb {
  d: path("M3 4h18v17.5H3Zm5-1.5v3m8-3v3m-13 3h18");
}

.u4c1nbb_i {
  d: path("M10 18.5v-7h6l-1.5 2.25L16 16h-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qnj07mblb"/><path class="u4c1nbb_i"/></g>`,
		"fallback": "uix-sharp:calendar-deadline",
	});
}

export default Component;
