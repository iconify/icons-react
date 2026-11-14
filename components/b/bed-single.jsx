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
		"content": `<style>.tf1tecbpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5v17M3 11h18.5v4.5H3Zm3-3.5h5.5V11H6Zm14.5 8v5");
}
</style><path class="tf1tecbpr"/>`,
		"fallback": "uix-sharp:bed-single",
	});
}

export default Component;
