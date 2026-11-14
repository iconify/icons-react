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
		"content": `<style>.r321dabmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM10.25 9H21.5v4H10.25ZM2.5 15.75h19");
}
</style><path class="r321dabmu"/>`,
		"fallback": "uix-sharp:casualty",
	});
}

export default Component;
