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
		"content": `<style>.bxfhwg7mw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3H12v7.5H3.5Zm0 10.5H12V21H3.5Zm15-10v17M15.75 18l2.75 2.75L21.25 18");
}
</style><path class="bxfhwg7mw"/>`,
		"fallback": "uix-sharp:frame-stack-vertical",
	});
}

export default Component;
