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
		"content": `<style>.lsv8hws6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10h14c0 2-3 3-7 3s-7-1-7-3Zm7 3v5.5M8 21l1.5-2.5h5L16 21Zm4-18.5C10 5 9.75 7.25 12 7.25S14 5 12 2.5Z");
}
</style><path class="lsv8hws6c"/>`,
		"fallback": "uix-sharp:brass-oil-lamp",
	});
}

export default Component;
