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
		"content": `<style>.sina20bry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3-6V2.5m-2 2l2-2l2 2M12 18v3.5m-2-2l2 2l2-2M6 12H2.5m2-2l-2 2l2 2M18 12h3.5m-2-2l2 2l-2 2");
}
</style><path class="sina20bry"/>`,
		"fallback": "uix-sharp:centrifugal",
	});
}

export default Component;
