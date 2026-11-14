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
		"content": `<style>.zxq7bib_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 5zA1.25 1.25 0 0 1 5.5 6.25v11.5A1.25 1.25 0 0 1 4.25 19A1.25 1.25 0 0 1 3 17.75V6.25A1.25 1.25 0 0 1 4.25 5m2.5 0zA1.25 1.25 0 0 1 8 6.25v11.5A1.25 1.25 0 0 1 6.75 19a1.25 1.25 0 0 1-1.25-1.25V6.25A1.25 1.25 0 0 1 6.75 5M8 12h8m1.25-7za1.25 1.25 0 0 1 1.25 1.25v11.5A1.25 1.25 0 0 1 17.25 19A1.25 1.25 0 0 1 16 17.75V6.25A1.25 1.25 0 0 1 17.25 5m2.5 0zA1.25 1.25 0 0 1 21 6.25v11.5A1.25 1.25 0 0 1 19.75 19a1.25 1.25 0 0 1-1.25-1.25V6.25A1.25 1.25 0 0 1 19.75 5");
}
</style><path class="zxq7bib_r"/>`,
		"fallback": "uix:barbell",
	});
}

export default Component;
