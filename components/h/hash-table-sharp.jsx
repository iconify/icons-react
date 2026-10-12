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
		"content": `<style>.ekyyb-bbj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 6.25l-1 11.5m5-11.5l-1 11.5m-5.5-8h7.25m-8 4.5H10m3.5-11.5h7.75V7.5H13.5zm0 7h7.75v4.5H13.5zm0 6.75h7.75v4.75H13.5z");
}
</style><path class="ekyyb-bbj"/>`,
		"fallback": "iconoven:hash-table-sharp",
	});
}

export default Component;
