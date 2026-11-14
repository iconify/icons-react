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
		"content": `<style>.ktymb6zzc {
  d: path("M10.75 13.75s-3-2.25-3-5a3 3 0 0 1 6 0c0 2.75-3 5-3 5ZM3.5 19A2.5 2.5 0 0 1 6 16.5h12");
}

.mlvvklb0x {
  d: path("M3.5 19V5A2.5 2.5 0 0 1 6 2.5h12v19H6A2.5 2.5 0 0 1 3.5 19ZM18 5.5h2.75v3.75H18Zm0 6.5h2.75v3.75H18Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mlvvklb0x"/><path class="ktymb6zzc"/></g>`,
		"fallback": "uix-sharp:address-book",
	});
}

export default Component;
