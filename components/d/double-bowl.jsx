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
		"content": `<style>.q5up0qrlw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h19V18h-19Zm0-5.5h8L9 14.5H4Zm0 0c.5-4 7.5-4 8 0m3 0h8L20 14.5h-5Z");
}
</style><path class="q5up0qrlw"/>`,
		"fallback": "uix-sharp:double-bowl",
	});
}

export default Component;
