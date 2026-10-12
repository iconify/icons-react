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
		"content": `<style>.sdg60lbwu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20.25V3.75h3.5M19 20.25V3.75h-3.5M12 17.5V8m-2.75 2.75L12 8l2.75 2.75");
}
</style><path class="sdg60lbwu"/>`,
		"fallback": "iconoven:ceiling-sign-sharp",
	});
}

export default Component;
