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
		"content": `<style>.hqwbi-bci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9h17L14 15v6h-4v-6Zm4-5.5h.01m4.49.75h.01m4.49-.75h.01");
}
</style><path class="hqwbi-bci"/>`,
		"fallback": "uix-sharp:data-collection",
	});
}

export default Component;
