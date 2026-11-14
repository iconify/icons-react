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
		"content": `<style>.plk5gv4sk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v16h-19ZM6 4v16M18 4v16M12 8.5v7m3.031-5.25l-6.062 3.5m0-3.5l6.062 3.5");
}
</style><path class="plk5gv4sk"/>`,
		"fallback": "uix-sharp:freeze-frame",
	});
}

export default Component;
