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
		"content": `<style>.hy9gwkb-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19m-19 9.5h19M3.5 8C5 4 7 3 7 5s-1 3.5.5 3.5s2.5-3 4-3S12.5 8 14 8s2.5-1.5 4-1.5m-14.5 11C5 15.5 6 14 7 14s.5 3.5 2 3.5s2.5-3 4-3s1 2.5 2.5 2.5");
}
</style><path class="hy9gwkb-m"/>`,
		"fallback": "uix-sharp:co-signer",
	});
}

export default Component;
