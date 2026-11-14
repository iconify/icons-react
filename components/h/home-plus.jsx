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
		"content": `<style>.q2hhar9mj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 10.5l8-7l8 7V20H4Zm8 1.25v5.5M9.25 14.5h5.5");
}
</style><path class="q2hhar9mj"/>`,
		"fallback": "uix-sharp:home-plus",
	});
}

export default Component;
