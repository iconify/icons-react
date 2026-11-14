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
		"content": `<style>.yg3pdvrta {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19m-17-5h2.75v10H4.5Zm12.25 0h2.75v10h-2.75Zm-2 15l2 2L21 15.75");
}
</style><path class="yg3pdvrta"/>`,
		"fallback": "uix-sharp:good-lift",
	});
}

export default Component;
