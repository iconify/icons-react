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
		"content": `<style>.m9m4ifbmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h11v11h-11Zm11 1.5a5 5 0 1 1 0 8M5.25 6.5v11M16.5 12h.01");
}
</style><path class="m9m4ifbmr"/>`,
		"fallback": "uix-sharp:cd-case",
	});
}

export default Component;
