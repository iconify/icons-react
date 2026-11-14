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
		"content": `<style>.hajrpbc-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 5H4l4 7l-4 7h7m6.5-13.5v5M15 8h5m-5 6.5h5m-5 3h5");
}
</style><path class="hajrpbc-q"/>`,
		"fallback": "uix-sharp:calculated-measure",
	});
}

export default Component;
