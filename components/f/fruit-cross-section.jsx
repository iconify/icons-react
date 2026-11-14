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
		"content": `<style>.rfffk2b3y {
  d: path("M10.75 9.75a1.25 2 0 1 0 2.5 0a1.25 2 0 1 0-2.5 0Zm-3.25 5.5a1.25 2 0 1 0 2.5 0a1.25 2 0 1 0-2.5 0Zm6.5 0a1.25 2 0 1 0 2.5 0a1.25 2 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xlr_1y0cc {
  d: path("M12 5c-2.5-1.5-8.5-1-8.5 6c0 6 4 10.5 8.5 10.5S20.5 17 20.5 11c0-7-6-7.5-8.5-6Zm0 0l1-2.5");
}
</style><g class="ulnmmdpxh"><path class="xlr_1y0cc"/><path class="rfffk2b3y"/></g>`,
		"fallback": "uix-sharp:fruit-cross-section",
	});
}

export default Component;
