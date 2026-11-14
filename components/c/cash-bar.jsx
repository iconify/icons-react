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
		"content": `<style>.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.q5_wtdrvo {
  d: path("M2.5 3h15L10 11.5L2.5 3m7.5 8.5V21m-4 0h6m2-3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q5_wtdrvo"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:cash-bar",
	});
}

export default Component;
