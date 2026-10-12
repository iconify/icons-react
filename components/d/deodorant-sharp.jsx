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
		"content": `<style>.k_3o2lbjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 6.5V5.25c0-1.5 1.45-2.5 3.25-2.5s3.25 1 3.25 2.5V6.5Zm-1.5 3h9.5V18h-9.5zM10 12.25v3.5m.25 5.25h3.5");
}
</style><path class="k_3o2lbjm"/>`,
		"fallback": "iconoven:deodorant-sharp",
	});
}

export default Component;
