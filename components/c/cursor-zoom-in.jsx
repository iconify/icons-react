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
		"content": `<style>.on_kl1ifp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 3l7.5 3l-3 1.5l-1.5 3Zm5.5 11a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Zm9.5 4l3 3m-7-9.5v5M11.5 14h5");
}
</style><path class="on_kl1ifp"/>`,
		"fallback": "uix-sharp:cursor-zoom-in",
	});
}

export default Component;
