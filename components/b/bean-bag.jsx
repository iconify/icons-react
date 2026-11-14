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
		"content": `<style>.kzqrbvbtp {
  d: path("M12 6.5c2.5 4 3.5 8.75 2 14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wotnx2bjf {
  d: path("M5.5 20.75c-2.75 0-3.5-3.5-2-6.25C5 11 7 6 10 5.5q2 1.75 4 0c3 .5 5 5.5 6.5 9c1.5 2.75.75 6.25-2 6.25q-6.5 1-13 0Z");
}
</style><g class="ulnmmdpxh"><path class="wotnx2bjf"/><path class="kzqrbvbtp"/></g>`,
		"fallback": "uix-sharp:bean-bag",
	});
}

export default Component;
