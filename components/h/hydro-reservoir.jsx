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
		"content": `<style>.i5fodgbyx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19h19M12 19V4.5h3L20.5 19M3 8.5q1.5-1.5 3 0t3 0m-6 5q1.5-1.5 3 0t3 0");
}
</style><path class="i5fodgbyx"/>`,
		"fallback": "uix-sharp:hydro-reservoir",
	});
}

export default Component;
