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
		"content": `<style>.qjdbkf4_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13C5 10 7 10 9 12q3 3 6 0c2-2 4-2 6.5 1m-19 5C5 15 7 15 9 17q3 3 6 0c2-2 4-2 6.5 1M12 4v5");
}
</style><path class="qjdbkf4_l"/>`,
		"fallback": "uix:category-water-sports",
	});
}

export default Component;
