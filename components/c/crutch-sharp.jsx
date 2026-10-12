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
		"content": `<style>.ffjw_wb_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5v3H6.25zm1.5 3l3.5 10.75h1.5l3.5-10.75M12 16.5v2.25M9.46 11h5.08m-4.04 7.75h3v2.5h-3z");
}
</style><path class="ffjw_wb_a"/>`,
		"fallback": "iconoven:crutch-sharp",
	});
}

export default Component;
