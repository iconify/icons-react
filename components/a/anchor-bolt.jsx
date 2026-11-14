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
		"content": `<style>.gwp5_-_pa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14h18v7.5H3Zm3-3h12M9.5 6.5h5V11h-5Zm2.5-4v4m0 4.5v3");
}
</style><path class="gwp5_-_pa"/>`,
		"fallback": "uix-sharp:anchor-bolt",
	});
}

export default Component;
