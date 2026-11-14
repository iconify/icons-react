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
		"content": `<style>.oyyjzob8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5L12 4l9 6.5Zm9 0V21m0-17l-3 6.5M12 4l3 6.5");
}
</style><path class="oyyjzob8t"/>`,
		"fallback": "uix-sharp:cocktail-umbrella",
	});
}

export default Component;
