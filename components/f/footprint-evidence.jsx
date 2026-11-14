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
		"content": `<style>.oe3dvebdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5c3 0 4.5 2.5 4.5 5.5c0 2.5-1.5 4-1.5 5.5H6c0-1.5-1.5-3-1.5-5.5C4.5 5 6 2.5 9 2.5ZM6 16h6v5H6Zm9 5l1.75-6.5h3L21.5 21Z");
}
</style><path class="oe3dvebdy"/>`,
		"fallback": "uix-sharp:footprint-evidence",
	});
}

export default Component;
