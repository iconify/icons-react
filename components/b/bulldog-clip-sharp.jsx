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
		"content": `<style>.eom7thbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 11.5V7h3.5v4.5m3 0V7H17v4.5m-8.5 0H17l.39 1.45l.97 3.6l.39 1.45H5.25l.39-1.45l.97-3.6L7 11.5zM8 18v3.25h8V18");
}
</style><path class="eom7thbnc"/>`,
		"fallback": "iconoven:bulldog-clip-sharp",
	});
}

export default Component;
