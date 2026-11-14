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
		"content": `<style>.hr0yvmm7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.944 20.5H3.5v-10L12 3.25l8.5 7.25v.456M16 17.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm1.75-4v.5m0 7v.5m-4-4h.5m7 0h.5");
}
</style><path class="hr0yvmm7f"/>`,
		"fallback": "uix-sharp:home-solar",
	});
}

export default Component;
