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
		"content": `<style>.hk192lb1n {
  d: path("M2.5 12h7v7h-7Zm12 0h7v7h-7ZM6 9q6-8 12 0");
}

.m_l7hk9ss {
  d: path("M14.75 8.5L18 9l.5-3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hk192lb1n"/><path class="m_l7hk9ss"/></g>`,
		"fallback": "uix-sharp:energy-transfer",
	});
}

export default Component;
