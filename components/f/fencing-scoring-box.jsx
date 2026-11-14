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
		"content": `<style>.opegiccgt {
  d: path("M6.75 14a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yevoyerqr {
  d: path("M3 8h18v12H3Zm5 0V6.5a4 4 0 0 1 8 0V8");
}
</style><g class="ulnmmdpxh"><path class="yevoyerqr"/><path class="opegiccgt"/></g>`,
		"fallback": "uix-sharp:fencing-scoring-box",
	});
}

export default Component;
