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
		"content": `<style>.ha8prubvr {
  d: path("M6.5 13v4");
}

.k899psble {
  d: path("M2.5 10h19v10h-19Z");
}

.u1t2crblf {
  fill: currentColor;
  d: path("M2.5 3.5H11V7H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k899psble"/><path class="u1t2crblf"/><path class="ha8prubvr"/></g>`,
		"fallback": "uix-sharp:data-field",
	});
}

export default Component;
