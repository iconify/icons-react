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
		"content": `<style>.a9av1e0_m {
  d: path("M5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-2.5 13c0-3.75 2.75-6 6-6c1.278 0 2.455.306 3.398.789M13 7.5A3 3 0 1 1 18.598 9M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a9av1e0_m"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:accounting-team",
	});
}

export default Component;
