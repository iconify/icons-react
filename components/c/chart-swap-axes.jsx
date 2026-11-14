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
		"content": `<style>.fdyjbmsve {
  d: path("m9.5 2.5l-2 2l2 2m8 8l2 2l2-2");
}

.mtx_ldbpn {
  d: path("M3.5 3v17.5H21M7.5 4.5c6.5 0 12 5.5 12 12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mtx_ldbpn"/><path class="fdyjbmsve"/></g>`,
		"fallback": "uix-sharp:chart-swap-axes",
	});
}

export default Component;
