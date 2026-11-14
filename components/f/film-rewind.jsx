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
		"content": `<style>.wa2eu9b2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5h10v14H3ZM6 3h4v2.5H6Zm15 9h-5m2-2.5L16 12l2 2.5");
}
</style><path class="wa2eu9b2k"/>`,
		"fallback": "uix-sharp:film-rewind",
	});
}

export default Component;
