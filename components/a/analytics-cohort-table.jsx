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
		"content": `<style>.fpesd1brr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v6h-6v6H9v6H3Zm0 6h12M3 15h6M9 3v12m6-12v6");
}
</style><path class="fpesd1brr"/>`,
		"fallback": "uix-sharp:analytics-cohort-table",
	});
}

export default Component;
