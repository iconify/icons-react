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
		"content": `<style>.k4j78dbvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 20V4m-3 3l3-3l3 3m8 13V4m-3 3l3-3l3 3");
}
</style><path class="k4j78dbvg"/>`,
		"fallback": "uix-sharp:arrows-up-pair",
	});
}

export default Component;
