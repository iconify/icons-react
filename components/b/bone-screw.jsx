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
		"content": `<style>.vpgle130z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 2.5h3.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 13.75 6h-3.5A1.75 1.75 0 0 1 8.5 4.25a1.75 1.75 0 0 1 1.75-1.75M12 6za1.5 1.5 0 0 1 1.5 1.5v8.728a1.5 1.5 0 0 1-.096.527L12.75 18.5a.801.801 0 0 1-1.5 0l-.654-1.745a1.5 1.5 0 0 1-.096-.527V7.5A1.5 1.5 0 0 1 12 6m-1.5 3l3 1.5m-3 2l3 1.5");
}
</style><path class="vpgle130z"/>`,
		"fallback": "uix:bone-screw",
	});
}

export default Component;
