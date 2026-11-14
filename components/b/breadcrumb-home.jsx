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
		"content": `<style>.cnfn-wbns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11L7 6.5l4.5 4.5v6.5h-9Zm12-2.25L17.75 12l-3.25 3.25M21 12h.01");
}
</style><path class="cnfn-wbns"/>`,
		"fallback": "uix-sharp:breadcrumb-home",
	});
}

export default Component;
