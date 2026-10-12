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
		"content": `<style>.z50a626ue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 2.75h17.5v11.5H3.25zM7 7h10M7 10h10m-9.25 7.25l-1 1l1 1l1 1l-1 1m4.25-4l-1 1l1 1l1 1l-1 1m4.25-4l-1 1l1 1l1 1l-1 1");
}
</style><path class="z50a626ue"/>`,
		"fallback": "iconoven:air-vent-sharp",
	});
}

export default Component;
