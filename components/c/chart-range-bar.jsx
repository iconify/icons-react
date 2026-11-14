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
		"content": `<style>.s01pg-i3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19M3 9h3v7.5H3Zm5-5.5h3V13H8Zm5 4h3V18h-3Zm5-5h3v8h-3Z");
}
</style><path class="s01pg-i3g"/>`,
		"fallback": "uix-sharp:chart-range-bar",
	});
}

export default Component;
