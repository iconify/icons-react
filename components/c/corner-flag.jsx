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
		"content": `<style>.taqef4blb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21V3.5m0 0L14 7L4 10.5ZM4 21h17M4 16a5 5 0 0 1 5 5");
}
</style><path class="taqef4blb"/>`,
		"fallback": "uix-sharp:corner-flag",
	});
}

export default Component;
