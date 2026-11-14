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
		"content": `<style>.ecewzzbig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.85 21H4v-2.75h8.2m-.05 0H5V15.5h7.2m-.05 0H3.5v-2.75h11v.4M4.5 10h11v2.75h-11ZM4 7.25h11V10H4Zm14 7.5L21 16v2.25c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V16Z");
}
</style><path class="ecewzzbig"/>`,
		"fallback": "uix-sharp:deposit-insured",
	});
}

export default Component;
