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
		"content": `<style>.e2h9i4bpl {
  d: path("M10 17.5H4.5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V10m-10-7.5v15m5-15V10m-10-2.5h15m-15 5H10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xkny57b_l {
  d: path("M10 10h10v10H10Z");
}
</style><g class="ulnmmdpxh"><path class="e2h9i4bpl"/><path class="xkny57b_l"/></g>`,
		"fallback": "uix-sharp:convolution",
	});
}

export default Component;
