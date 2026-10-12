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
		"content": `<style>.mugk83bdr {
  d: path("M19 4.75L4.25 19.25h15.5");
}

.p25zpgboi {
  d: path("M11 19.25a6.75 6.75 0 0 0-1.94-4.73");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mugk83bdr"/><path class="p25zpgboi"/></g>`,
		"fallback": "iconoven:angle-sign-sharp",
	});
}

export default Component;
