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
		"content": `<style>.c7-g09bgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19v9.5h-19Zm7.5 0V2.5h9.5V12m-16-7H7v7H3.5Zm9.25 1h4m-4 3h2.75");
}
</style><path class="c7-g09bgp"/>`,
		"fallback": "uix-sharp:document-fax",
	});
}

export default Component;
