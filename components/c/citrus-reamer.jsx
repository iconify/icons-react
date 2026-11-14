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
		"content": `<style>.bza0_b8nz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14h17a8.5 6.5 0 0 1-17 0ZM8 14h8L12 4Zm4-6.5V14");
}
</style><path class="bza0_b8nz"/>`,
		"fallback": "uix-sharp:citrus-reamer",
	});
}

export default Component;
