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
		"content": `<style>.u3m2fwbvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 19V7.5h-1V5h6v2.5h-1V19m5 0V7.5h-1V5h6v2.5h-1V19m-16 0h19m-12-7h5");
}
</style><path class="u3m2fwbvm"/>`,
		"fallback": "uix-sharp:bitts",
	});
}

export default Component;
