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
		"content": `<style>.i_ov5bb6q {
  d: path("M7.5 11V4.5h3V11m0-5h3v5m0-6h3v6m-11 7.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.qdtznvb_r {
  d: path("M2.5 3.5h2v13h16V11h-16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qdtznvb_r"/><path class="i_ov5bb6q"/></g>`,
		"fallback": "uix-sharp:book-cart",
	});
}

export default Component;
