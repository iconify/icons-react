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
		"content": `<style>.lfemblb8c {
  d: path("M3 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0ZM16 16l5 5M7 10.5h6.5");
}

.pvpfk_bdv {
  d: path("m11 8l2.5 2.5L11 13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lfemblb8c"/><path class="pvpfk_bdv"/></g>`,
		"fallback": "uix-sharp:find-replace",
	});
}

export default Component;
