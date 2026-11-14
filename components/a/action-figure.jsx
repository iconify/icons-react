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
		"content": `<style>.j8f8s_r_s {
  d: path("M10 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM5 12.5L8 9h8l3 3.5");
}

.szr4o0iul {
  d: path("M9.5 9v5l-1 5m6-10v5l1 5m-10 0h13v2.5h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j8f8s_r_s"/><path class="szr4o0iul"/></g>`,
		"fallback": "uix-sharp:action-figure",
	});
}

export default Component;
