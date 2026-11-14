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
		"content": `<style>.m_os4qq9l {
  d: path("M6 3h12v18l-6-4.5L6 21Z");
}

.meogk_ylc {
  d: path("m9 9.5l2 2l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m_os4qq9l"/><path class="meogk_ylc"/></g>`,
		"fallback": "uix-sharp:bookmark-check",
	});
}

export default Component;
