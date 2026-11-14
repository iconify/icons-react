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
		"content": `<style>.ctg3ymv3b {
  d: path("M7 18v-6a5 5 0 0 1 10 0v6l2.5 2.5h-15Z");
}

.jl8fukfcs {
  d: path("M10 7.5v-2a2 2 0 0 1 4 0v2m-7 6h10m-10 3h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ctg3ymv3b"/><path class="jl8fukfcs"/></g>`,
		"fallback": "uix-sharp:bronze-bell-ancient",
	});
}

export default Component;
