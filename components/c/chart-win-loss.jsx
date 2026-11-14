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
		"content": `<style>.c6bmv3q-h {
  d: path("M2.5 12h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v02g4sb6i {
  fill: currentColor;
  d: path("M3 5h2v5H3Zm3.5 0h2v5h-2Zm3.5 9h2v5h-2Zm3.5-9h2v5h-2Zm3.5 9h2v5h-2Zm3 0h1.75v5H20Z");
}
</style><g class="ulnmmdpxh"><path class="c6bmv3q-h"/><path class="v02g4sb6i"/></g>`,
		"fallback": "uix-sharp:chart-win-loss",
	});
}

export default Component;
