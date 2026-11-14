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

.u71s0_byq {
  d: path("M9.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm4.25-1.75l1-1m-1 4.5l1 1m-4.5-4.5l-1-1m1 4.5l-1 1M14.5 10H16m-6.5 0H8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="u71s0_byq"/></g>`,
		"fallback": "uix-sharp:computer-virus",
	});
}

export default Component;
