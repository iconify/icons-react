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
		"content": `<style>.n7pzgub2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m0-13h6.5M3 15h6.5M3 21.5h6.5M21 2.5v19m0-13h-6.5M21 15h-6.5m6.5 6.5h-6.5M7 11.75h.25a1.5 1.5 0 0 1 1.5 1.5v.25a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5v-.25a1.5 1.5 0 0 1 1.5-1.5m9.75 6.5H17a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5h-.25a1.5 1.5 0 0 1-1.5-1.5v-.25a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="n7pzgub2o"/>`,
		"fallback": "uix:aisle-warehouse",
	});
}

export default Component;
