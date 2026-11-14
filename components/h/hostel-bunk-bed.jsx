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
		"content": `<style>.b5_2ubbjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5V21M20 3.5V21M4 6.5h16v4H4Zm0 8h16v4H4Z");
}
</style><path class="b5_2ubbjw"/>`,
		"fallback": "uix-sharp:hostel-bunk-bed",
	});
}

export default Component;
