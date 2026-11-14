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

.zpfgxsktr {
  fill: currentColor;
  d: path("M4 5h1.75v7H4Zm5 7h1.75v6H9Zm5-9h1.75v9H14Zm5 9h1.75v8H19Z");
}
</style><g class="ulnmmdpxh"><path class="c6bmv3q-h"/><path class="zpfgxsktr"/></g>`,
		"fallback": "uix-sharp:chart-bar-negative",
	});
}

export default Component;
