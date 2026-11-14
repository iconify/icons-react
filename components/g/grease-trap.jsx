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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyoqm3b2y {
  d: path("M2.5 7H9v4m12.5-4H15v4m3 3.5s-3 3-3 4.25a3 3 0 0 0 6 0c0-1.25-3-4.25-3-4.25Z");
}

.w69s8qb5l {
  d: path("M12.9 16.5H6V3h12v7.6");
}
</style><g class="ulnmmdpxh"><path class="w69s8qb5l"/><path class="vyoqm3b2y"/></g>`,
		"fallback": "uix-sharp:grease-trap",
	});
}

export default Component;
