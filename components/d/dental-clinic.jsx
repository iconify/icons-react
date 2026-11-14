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
		"content": `<style>.lvyt7wbmb {
  d: path("M4 11h16v10H4Zm8-7.5c-1-1-3.5-1.25-3.5 1.5c0 1.75.75 2.5 1 3.75l.75 2.25H11l1-2.5l1 2.5h.75l.75-2.25c.25-1.25 1-2 1-3.75c0-2.75-2.5-2.5-3.5-1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uncg9e5gx {
  d: path("M9.75 21v-4.5a2.25 2.25 0 0 1 4.5 0V21");
}
</style><g class="ulnmmdpxh"><path class="lvyt7wbmb"/><path class="uncg9e5gx"/></g>`,
		"fallback": "uix-sharp:dental-clinic",
	});
}

export default Component;
