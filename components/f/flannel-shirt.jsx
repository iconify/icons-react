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
		"content": `<style>.q9s588tfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.5 3l-4 2C3.5 5.5 3 6.5 3 7.5L2.5 20h3l1-10v11h11V10l1 10h3L21 7.5c0-1-.5-2-1.5-2.5l-4-2L12 7ZM12 7v14m-5.5-7h11");
}
</style><path class="q9s588tfa"/>`,
		"fallback": "uix-sharp:flannel-shirt",
	});
}

export default Component;
