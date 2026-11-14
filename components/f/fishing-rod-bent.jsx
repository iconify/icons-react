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
		"content": `<style>.r5egoab_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21Q5.5 0 17 4.5m0 0v10.75m-3 4.25q3-2.5 6 0M12.5 15l1 1.5m8-1.5l-1 1.5");
}
</style><path class="r5egoab_d"/>`,
		"fallback": "uix-sharp:fishing-rod-bent",
	});
}

export default Component;
