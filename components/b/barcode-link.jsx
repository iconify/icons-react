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
		"content": `<style>.avws1jt2r {
  d: path("M3.5 4.5v15m3-15v15m3-15v14.9m3-14.9V12m.495 7.884l3.889-3.889l2.121 2.121l-3.889 3.889Z");
}

.cid3i0bxr {
  d: path("m15.995 16.884l3.889-3.889l2.121 2.121l-3.889 3.889Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="avws1jt2r"/><path class="cid3i0bxr"/></g>`,
		"fallback": "uix-sharp:barcode-link",
	});
}

export default Component;
