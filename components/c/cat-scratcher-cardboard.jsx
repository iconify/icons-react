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
		"content": `<style>.uj-ktr73f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 18V4A1.5 1.5 0 0 1 6 2.5h12A1.5 1.5 0 0 1 19.5 4v14M3 18h18v3.5H3Zm4.75-4l2-5m1 5l2-5m1 5l2-5");
}
</style><path class="uj-ktr73f"/>`,
		"fallback": "uix-sharp:cat-scratcher-cardboard",
	});
}

export default Component;
