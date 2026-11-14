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
		"content": `<style>.fbr5wkb-n {
  d: path("M2.5 12a9.5 7.5 0 1 0 19 0a9.5 7.5 0 1 0-19 0Z");
}

.mssyb7j1q {
  d: path("M9.75 7.5C7 7.25 5 9 5 12s1.75 4.5 4.25 4.25c1.25-.25 1.5-1.5 1-2.5s-.5-2.5 0-3.5C11 9 11 7.75 9.75 7.5Zm4.5 0C17 7.25 19 9 19 12s-1.75 4.5-4.25 4.25c-1.25-.25-1.5-1.5-1-2.5s.5-2.5 0-3.5C13 9 13 7.75 14.25 7.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fbr5wkb-n"/><path class="mssyb7j1q"/></g>`,
		"fallback": "uix-sharp:ct-scan-slice",
	});
}

export default Component;
