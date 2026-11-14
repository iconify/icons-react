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
		"content": `<style>.uesn0obmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5L5 3.5h14l2.5 18m-14-18v10m9-10v10m-10 0h11m-10-4h9");
}
</style><path class="uesn0obmz"/>`,
		"fallback": "uix-sharp:garden-swing-seat",
	});
}

export default Component;
