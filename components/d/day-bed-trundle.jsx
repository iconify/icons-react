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
		"content": `<style>.wauixx8fq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5v8h18V5M3 9.5h18M8 15.75h13.5v4H8Z");
}
</style><path class="wauixx8fq"/>`,
		"fallback": "uix-sharp:day-bed-trundle",
	});
}

export default Component;
