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
		"content": `<style>.vxbkz2bda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.8 19H3V2.5h13v12.8M6.5 7h6m-6 4h4m4.25 7l2 2L21 15.75");
}
</style><path class="vxbkz2bda"/>`,
		"fallback": "uix-sharp:code-quality",
	});
}

export default Component;
