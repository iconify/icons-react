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
		"content": `<style>.bk0k2jhku {
  d: path("M4.5 2.5h15v19h-15ZM8 6h8M8 9.5h5.5M8 13h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wvvi3ue9k {
  d: path("M8 15.75h8v3H8Z");
}
</style><g class="ulnmmdpxh"><path class="bk0k2jhku"/><path class="wvvi3ue9k"/></g>`,
		"fallback": "uix-sharp:income-statement",
	});
}

export default Component;
