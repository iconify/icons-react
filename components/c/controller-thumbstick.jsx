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
		"content": `<style>.nljepl5hr {
  d: path("M9.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm1.25-5.5L12 5.25l1.5 1.25m-3 11l1.5 1.25l1.5-1.25m-7-7L5.25 12l1.25 1.5m11-3l1.25 1.5l-1.25 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="nljepl5hr"/></g>`,
		"fallback": "uix-sharp:controller-thumbstick",
	});
}

export default Component;
