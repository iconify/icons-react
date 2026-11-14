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
		"content": `<style>.hojf93wic {
  d: path("M2 3.5h8q2 0 2 2v2m0 2.75V15");
}

.lhow-7p1s {
  fill: currentColor;
  d: path("M3 14q3-2 6 0t6 0t6 0v7H3Z");
}

.u51upubhw {
  d: path("M3 10v11h18V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u51upubhw"/><path class="lhow-7p1s"/><path class="hojf93wic"/></g>`,
		"fallback": "uix-sharp:drilling-mud",
	});
}

export default Component;
