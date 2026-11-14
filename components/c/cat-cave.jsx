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
		"content": `<style>.aml2qxlgf {
  d: path("M3.5 18.5c0-10 3-15 8.5-15s8.5 5 8.5 15m-18 0h19v3h-19Z");
}

.kyds73bje {
  d: path("M8 18.5V14a4 4 0 0 1 8 0v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aml2qxlgf"/><path class="kyds73bje"/></g>`,
		"fallback": "uix-sharp:cat-cave",
	});
}

export default Component;
