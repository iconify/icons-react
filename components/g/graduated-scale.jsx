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
		"content": `<style>.hbe56nb7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9v19h-9Zm0 4h5m-5 4h3m-3 4h5m-5 4h3");
}
</style><path class="hbe56nb7v"/>`,
		"fallback": "uix-sharp:graduated-scale",
	});
}

export default Component;
