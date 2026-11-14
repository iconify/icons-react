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
		"content": `<style>.r48pzokgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h19M3 15h3.5v5.5H3Zm6.75-3h3.5v8.5h-3.5Zm6.75-3H20v11.5h-3.5Zm1.75 0V2.5l3.25 1.75L18.25 6");
}
</style><path class="r48pzokgq"/>`,
		"fallback": "uix-sharp:aarrr-metrics",
	});
}

export default Component;
