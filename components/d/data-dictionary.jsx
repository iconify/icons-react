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
		"content": `<style>.h4y72tbat {
  d: path("M19 17V2.5H7.5A2.5 2.5 0 0 0 5 5v14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uorimvbav {
  d: path("M19 17H7.5a2.25 2.25 0 0 0 0 4.5H19M9 8h6m-6 4h4");
}
</style><g class="ulnmmdpxh"><path class="h4y72tbat"/><path class="uorimvbav"/></g>`,
		"fallback": "uix-sharp:data-dictionary",
	});
}

export default Component;
