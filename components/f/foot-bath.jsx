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
		"content": `<style>.ld60hf-ln {
  d: path("M3 13h18l-1.5 6.5a2 2 0 0 1-2 1.5h-11a2 2 0 0 1-2-1.5ZM7.5 2.5V13m4-10.5v6L15 9.75c1.75.75 2.5 1.75 2.5 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdvyzobpc {
  d: path("M7.5 16.75q1.5-1 3 0m3 0q1.5-1 3 0");
}
</style><g class="ulnmmdpxh"><path class="ld60hf-ln"/><path class="zdvyzobpc"/></g>`,
		"fallback": "uix-sharp:foot-bath",
	});
}

export default Component;
