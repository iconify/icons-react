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
		"content": `<style>.yegf0pbwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 13.75h15.5v7.5H4.25zm0 2.5h15.5M12 2.75v8.5m-3.5-3.5l3.5 3.5l3.5-3.5");
}
</style><path class="yegf0pbwh"/>`,
		"fallback": "iconoven:drop-off-sharp",
	});
}

export default Component;
