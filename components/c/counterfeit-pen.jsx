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
		"content": `<style>.d_u7w_bfn {
  d: path("M11.7 19H2.5V5h19v6.8");
}

.egla8wwbn {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-3 0h.01m8.24 9.75l.25-2.5L19.75 14L22 16.25l-5.25 5.25Zm3.5-5.75L20 18.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d_u7w_bfn"/><path class="egla8wwbn"/></g>`,
		"fallback": "uix-sharp:counterfeit-pen",
	});
}

export default Component;
