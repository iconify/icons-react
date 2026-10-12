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
		"content": `<style>.gdl482bha {
  d: path("m13.05 20.17l6.9-7.09L21 12h-5V2.75H8V12H3l1.05 1.08l6.9 7.09L12 21.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2a82ccry {
  d: path("M9.75 8.5L12 10.75l2.25-2.25");
}
</style><g class="x2cwu0gfd"><path class="gdl482bha"/><path class="z2a82ccry"/></g>`,
		"fallback": "iconoven:downvote-sharp",
	});
}

export default Component;
