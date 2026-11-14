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
		"content": `<style>.aejgoyb1z {
  d: path("M13.7 19H2.5V5h19v9m0 4.7v.3h-.2M2.5 9.5h19m-19 0h19M6 15h2.5");
}

.kvf4_8_lo {
  d: path("M16.5 16.5c0-.9.7-1.5 1.5-1.5s1.5.6 1.5 1.5c0 1-1.5 1.1-1.5 2.25M18 21h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aejgoyb1z"/><path class="kvf4_8_lo"/></g>`,
		"fallback": "uix-sharp:card-lost",
	});
}

export default Component;
