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
		"content": `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.nudc98b_u {
  d: path("M10.25 17v-7h3.5v7M2.5 2.5L8 7m13.5-4.5L16 7M2.5 21.5L8 17m13.5 4.5L16 17");
}

.nv3bijylb {
  d: path("M8 7h8v10H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="nv3bijylb"/><path class="nudc98b_u"/></g>`,
		"fallback": "uix-sharp:hallway",
	});
}

export default Component;
