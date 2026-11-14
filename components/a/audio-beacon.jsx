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
		"content": `<style>.ygjv7012l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8h3l5-3.5v11L6 12H3Zm2 4v8.5m8.75-12.75a3.5 3.5 0 0 1 0 4.5M16 5.75a6.5 6.5 0 0 1 0 8.5M18.25 4a9.5 9.5 0 0 1 0 12");
}
</style><path class="ygjv7012l"/>`,
		"fallback": "uix-sharp:audio-beacon",
	});
}

export default Component;
