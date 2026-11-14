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
		"content": `<style>.nzifuy1aa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19 19.5H5m12.5-9L12 16l-5.5-5.5m11-6L12 10L6.5 4.5");
}
</style><path class="nzifuy1aa"/>`,
		"fallback": "uix-sharp:chevrons-down-line",
	});
}

export default Component;
