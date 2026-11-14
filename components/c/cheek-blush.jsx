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
		"content": `<style>.b920k0_hq {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM9 9.5h.01m5.99 0h.01");
}

.immu4dbwn {
  d: path("M13.949 15.625a2.25 2.25 0 0 1-3.898 0M5.5 13.25a1.5 1 0 1 0 3 0a1.5 1 0 1 0-3 0Zm10 0a1.5 1 0 1 0 3 0a1.5 1 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b920k0_hq"/><path class="immu4dbwn"/></g>`,
		"fallback": "uix-sharp:cheek-blush",
	});
}

export default Component;
