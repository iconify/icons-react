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
		"content": `<style>.v8h37vb0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 14a8 8 0 0 1 16 0M2.5 14h9.2m.3-8V3.5m2.5 13.25h5v2.75a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2Zm5 .75a1.25 1.25 0 0 1 0 2.5");
}
</style><path class="v8h37vb0c"/>`,
		"fallback": "uix-sharp:breakfast-buffet",
	});
}

export default Component;
