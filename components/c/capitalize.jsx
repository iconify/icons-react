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
		"content": `<style>.yw8jpo33k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h9M7 5v15m9.5-11.5v9a2 2 0 0 0 2 2H20M14 12h6");
}
</style><path class="yw8jpo33k"/>`,
		"fallback": "uix-sharp:capitalize",
	});
}

export default Component;
