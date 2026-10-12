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
		"content": `<style>.qbx8cfgwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.75 4.25v10.5h-15M8.5 11l-3.75 3.75L8.5 18.5");
}
</style><path class="qbx8cfgwh"/>`,
		"fallback": "iconoven:corner-down-left-sharp",
	});
}

export default Component;
