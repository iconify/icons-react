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
		"content": `<style>.uv1xwac8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10c6 0 6.5 10.5 9.5 10.5S15.5 10 21.5 10m-12-4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><path class="uv1xwac8g"/>`,
		"fallback": "uix-sharp:gravity-well",
	});
}

export default Component;
