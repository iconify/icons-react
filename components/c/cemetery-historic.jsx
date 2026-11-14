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
		"content": `<style>.u6vdl3bkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M3 20v-7.5a3 3 0 0 1 6 0V20m3 0V8.5a4.25 4.25 0 0 1 8.5 0V20M16.25 8.5v6m-1.5-4h3");
}
</style><path class="u6vdl3bkk"/>`,
		"fallback": "uix-sharp:cemetery-historic",
	});
}

export default Component;
