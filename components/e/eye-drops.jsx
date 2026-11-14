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
		"content": `<style>.l3fo_tlgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9.5h8V21H6Zm4-7v7M18 7s-2 2.75-2 4.25a2 2 0 0 0 4 0C20 9.75 18 7 18 7Z");
}
</style><path class="l3fo_tlgh"/>`,
		"fallback": "uix-sharp:eye-drops",
	});
}

export default Component;
