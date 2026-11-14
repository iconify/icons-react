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
		"content": `<style>.n52898bpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM7.75 9v9.5M15 6.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM16.25 9v9.5m-6.5-5l1.5 1.5l3-3");
}
</style><path class="n52898bpb"/>`,
		"fallback": "uix-sharp:earbuds-check",
	});
}

export default Component;
