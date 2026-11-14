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
		"content": `<style>.y0ds7mqza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.25h19v4.5h-19Zm2 0v-4m0 0q-2.25 0-2.25-3m2.25 3q2.25 0 2.25-3m5.25 7v-4m0 0q-2.25 0-2.25-3m2.25 3q2.25 0 2.25-3m5.25 7v-4m0 0q-2.25 0-2.25-3m2.25 3q2.25 0 2.25-3");
}
</style><path class="y0ds7mqza"/>`,
		"fallback": "uix-sharp:cover-crop",
	});
}

export default Component;
