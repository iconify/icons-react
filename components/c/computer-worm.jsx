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
		"content": `<style>.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whwdtxbqg {
  d: path("M6 11c1.5-3.5 4-3.5 5.5-1s4 2.5 5.5-1");
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="whwdtxbqg"/></g>`,
		"fallback": "uix-sharp:computer-worm",
	});
}

export default Component;
