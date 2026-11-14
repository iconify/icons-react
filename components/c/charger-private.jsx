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
		"content": `<style>.c0pksfm9q {
  d: path("m18.5 13.75l-3.75 4.5h3l-.5 3.5L21 17h-3Z");
}

.tc2sjabrg {
  d: path("M9.244 20.5H3.5v-10L12 3.25l8.5 7.25v3.256");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tc2sjabrg"/><path class="c0pksfm9q"/></g>`,
		"fallback": "uix-sharp:charger-private",
	});
}

export default Component;
