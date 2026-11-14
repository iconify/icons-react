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
		"content": `<style>.awxv7gbgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4q6.5-1.5 13 0q2.5.5 2.5 4t-2.5 4q-6.5 1.5-13 0Q3 11.5 3 8t2.5-4Zm-3 12.75q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0M7 20.25q2.25 1.5 4.5 0t4.5 0t4.5 0");
}
</style><path class="awxv7gbgm"/>`,
		"fallback": "uix-sharp:flotation-cushion",
	});
}

export default Component;
