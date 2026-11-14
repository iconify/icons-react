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
		"content": `<style>.yb9ac5q5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5.5h5V9h-5Zm0 1.75H5V3.5m9.5 3.75H19V3.5m-16.5 0h5m9 0h5M9 13h.01M15 13h.01M12 16.5h.01M8 20h.01M16 20h.01");
}
</style><path class="yb9ac5q5l"/>`,
		"fallback": "uix-sharp:drone-seeding",
	});
}

export default Component;
