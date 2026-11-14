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
		"content": `<style>.km6g3gbwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 17.5l2-5.5h4.25l2 5.5Zm10.75 0l2-5.5h4.25l2 5.5Zm-6-5.5l2-5.5h5.5l2 5.5Z");
}
</style><path class="km6g3gbwz"/>`,
		"fallback": "uix-sharp:ingot-stack",
	});
}

export default Component;
