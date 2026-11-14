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
		"content": `<style>.igs003b-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19v10.5h-19Zm7 0V5.5h5V8m-12 4h19m-15-1.5v3m11-3v3");
}
</style><path class="igs003b-l"/>`,
		"fallback": "uix-sharp:instrument-case",
	});
}

export default Component;
