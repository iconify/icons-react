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
		"content": `<style>.c64_wyz6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 20.25V6.75l.53-.85l1.44-2.3l.53-.85l.53.85l1.44 2.3l.53.85v14.5h-5zM3 20.5v-8l.43-.61l.89-1.28l.43-.61l.43.61l.89 1.28l.43.61v8.75H3zm14.5 0v-8l.43-.61l.89-1.28l.43-.61l.43.61l.89 1.28l.43.61v8.75h-3.5zM12 8v9.5");
}
</style><path class="c64_wyz6a"/>`,
		"fallback": "iconoven:crystal-sharp",
	});
}

export default Component;
