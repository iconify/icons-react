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
		"content": `<style>.nf60ukb3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5.5h5v6h-5Zm2.5 6v8m-3.5 0h7m-6-11L3 5.5v6Zm5 0l6.5-3v6Z");
}
</style><path class="nf60ukb3g"/>`,
		"fallback": "uix-sharp:airport-beacon",
	});
}

export default Component;
