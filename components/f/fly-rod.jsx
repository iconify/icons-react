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
		"content": `<style>.fyplymp3k {
  d: path("m6.279 15.479l2.266 1.057l-2.324 4.985l-2.266-1.057ZM7.5 16l6-13");
}

.t0ado0b5g {
  d: path("M7.25 19.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM13.5 3c5.5-.5 8 3.5 5 6.5c-2.5 2.5-3 5.5 1 6.5m0 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fyplymp3k"/><path class="t0ado0b5g"/></g>`,
		"fallback": "uix-sharp:fly-rod",
	});
}

export default Component;
