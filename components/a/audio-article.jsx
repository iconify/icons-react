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
		"content": `<style>.bwkcgschh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5h15V15h-15Zm-2 14h19M9 8.5V11m3-3.75v5m3-3.75V11");
}
</style><path class="bwkcgschh"/>`,
		"fallback": "uix-sharp:audio-article",
	});
}

export default Component;
