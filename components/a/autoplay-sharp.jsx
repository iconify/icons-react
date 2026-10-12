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
		"content": `<style>.oik771vcr {
  d: path("m15.08 9.89l2.59 1.72l.58.39l-.58.39l-2.59 1.72l-.58.39v-5z");
}

.qbn9ahbbt {
  d: path("M2.75 6.75h18.5v10.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qbn9ahbbt"/><path class="oik771vcr"/></g>`,
		"fallback": "iconoven:autoplay-sharp",
	});
}

export default Component;
