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
		"content": `<style>.isc9kdyga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5L6.5 9H9l-4.5 5.5h3l-4 5h17l-4-5h3L15 9h2.5Zm0 17v2");
}
</style><path class="isc9kdyga"/>`,
		"fallback": "uix-sharp:fir-tree",
	});
}

export default Component;
