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
		"content": `<style>.yrb0iub2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h11v12.5H3Zm5.5 0V6.5C12 6.5 16 6 20 4m-.75-1.5l1.5 3M6.5 15.25h4");
}
</style><path class="yrb0iub2c"/>`,
		"fallback": "uix-sharp:film-advance-lever",
	});
}

export default Component;
