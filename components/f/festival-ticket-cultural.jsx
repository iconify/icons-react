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
		"content": `<style>.hq5_eubzz {
  d: path("m13.75 12l-2.5.5l1.25 2.25l-2.25-1.25l-.5 2.5l-.5-2.5L7 14.75l1.25-2.25l-2.5-.5l2.5-.5L7 9.25l2.25 1.25l.5-2.5l.5 2.5l2.25-1.25l-1.25 2.25Z");
}

.m92lcfbad {
  d: path("M4.5 5h10.75a1.75 1.75 0 0 0 3.5 0h.75a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.75a1.75 1.75 0 0 0-3.5 0H4.5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM17 9.5v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m92lcfbad"/><path class="hq5_eubzz"/></g>`,
		"fallback": "uix-sharp:festival-ticket-cultural",
	});
}

export default Component;
