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
		"content": `<style>.kioz77phj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v11h-19ZM9 14v7.5m6-7.5v7.5M6.5 7H14m-7.5 3H11");
}
</style><path class="kioz77phj"/>`,
		"fallback": "uix-sharp:billboard",
	});
}

export default Component;
