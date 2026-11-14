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
		"content": `<style>.d_gpwda0y {
  d: path("m6.75 12.5l4.25-4l4.25 4v4h-8.5ZM4.5 9h.01m12.99 7h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ycsebn5jj {
  d: path("M2.5 6.5h17v12h-17Z");
}

.zw-jawvfn {
  d: path("M5 6.5v-2h16.5V16h-2");
}
</style><g class="ulnmmdpxh"><path class="ycsebn5jj"/><path class="zw-jawvfn"/><path class="d_gpwda0y"/></g>`,
		"fallback": "uix-sharp:cash-offer",
	});
}

export default Component;
