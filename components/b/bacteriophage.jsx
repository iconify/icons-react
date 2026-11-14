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
		"content": `<style>.rf0m2nqwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5L16.5 5v5L12 12.5L7.5 10V5Zm0 10v4m0 0L5 21m7-4.5v5m0-5l7 4.5");
}
</style><path class="rf0m2nqwh"/>`,
		"fallback": "uix-sharp:bacteriophage",
	});
}

export default Component;
