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
		"content": `<style>.jhxad-bnw {
  d: path("m12 6.5l1.176 2.382l2.628.382l-1.902 1.854l.449 2.618L12 12.5l-2.351 1.236l.449-2.618l-1.902-1.854l2.628-.382Z");
}

.tnsp6xb2l {
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v10a2.5 2.5 0 0 1-2.5 2.5H11l-4 3.5V18H5.5A2.5 2.5 0 0 1 3 15.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tnsp6xb2l"/><path class="jhxad-bnw"/></g>`,
		"fallback": "uix-sharp:guest-review",
	});
}

export default Component;
