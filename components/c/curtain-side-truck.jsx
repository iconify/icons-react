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
		"content": `<style>.mbyb-0lkj {
  d: path("M2.5 5h12v11.5h-12Zm12 3.5h4l3 3.5v4.5h-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yp7fczjhm {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM6 5v11.5M10 5v11.5");
}
</style><g class="ulnmmdpxh"><path class="mbyb-0lkj"/><path class="yp7fczjhm"/></g>`,
		"fallback": "uix-sharp:curtain-side-truck",
	});
}

export default Component;
