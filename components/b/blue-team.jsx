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
		"content": `<style>.ley5j_w0n {
  fill: currentColor;
  d: path("M9.5 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.qiko7v2tv {
  d: path("M6.5 20.5c0-4 2.5-7 5.5-7s5.5 3 5.5 7M2.75 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm14 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-14.25 9c0-2.25 1-4 2.5-4m16.5 4c0-2.25-1-4-2.5-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ley5j_w0n"/><path class="qiko7v2tv"/></g>`,
		"fallback": "uix-sharp:blue-team",
	});
}

export default Component;
