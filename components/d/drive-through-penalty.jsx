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
		"content": `<style>.b9zbfmu2a {
  d: path("m12.5 14l3 3l3-3");
}

.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.qralclxcl {
  d: path("M7 8.5h4.5a4 4 0 0 1 4 4V17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="qralclxcl"/><path class="b9zbfmu2a"/></g>`,
		"fallback": "uix-sharp:drive-through-penalty",
	});
}

export default Component;
