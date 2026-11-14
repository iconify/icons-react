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
		"content": `<style>.m0hnnwbik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19m17-19v19m-14.25-3v-10Q12 5 17.75 8.5v10Zm4-11.5v11.5M13.75 7v11.5");
}
</style><path class="m0hnnwbik"/>`,
		"fallback": "uix-sharp:gate-closed",
	});
}

export default Component;
