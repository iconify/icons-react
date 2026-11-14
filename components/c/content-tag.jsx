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
		"content": `<style>.e8_gx2b8k {
  d: path("M3 5a2 2 0 0 1 2-2h6.5l9.5 9.5l-8.5 8.5L3 11.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zbbowtbeh {
  d: path("M6.25 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="e8_gx2b8k"/><path class="zbbowtbeh"/></g>`,
		"fallback": "uix-sharp:content-tag",
	});
}

export default Component;
