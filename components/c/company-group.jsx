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
		"content": `<style>.exxvlzbym {
  d: path("M2.5 21V10h5.25V3h8.5v10h5.25v8Zm5.25-11v11m8.5-8v8");
}

.m9fy4_0ed {
  d: path("M10.5 21v-4h3v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="exxvlzbym"/><path class="m9fy4_0ed"/></g>`,
		"fallback": "uix-sharp:company-group",
	});
}

export default Component;
