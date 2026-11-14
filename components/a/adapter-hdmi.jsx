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
		"content": `<style>.cccmi1bwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h17v4.5L17 12H7L3.5 8.5ZM8 12h8l-1 4.5H9Zm4 4.5v5M7.5 7h9");
}
</style><path class="cccmi1bwg"/>`,
		"fallback": "uix-sharp:adapter-hdmi",
	});
}

export default Component;
