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
		"content": `<style>.hj48c18cl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5.75a5 5 0 0 1 8 0m-12 0h16v6H4Zm4 6a5 5 0 0 0 8 0M4.5 21c0-2.5 3.25-4 7.5-4s7.5 1.5 7.5 4");
}
</style><path class="hj48c18cl"/>`,
		"fallback": "uix-sharp:headset-wearer",
	});
}

export default Component;
