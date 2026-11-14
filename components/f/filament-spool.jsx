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
		"content": `<style>.m3rx40v_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5.5a8.5 2.5 0 1 0 17 0a8.5 2.5 0 1 0-17 0Zm0 13a8.5 2.5 0 1 0 17 0a8.5 2.5 0 1 0-17 0ZM8 7.75v8.5m8-8.5v8.5m0-4.75c3.5 0 5.5 1 5.5 3");
}
</style><path class="m3rx40v_v"/>`,
		"fallback": "uix-sharp:filament-spool",
	});
}

export default Component;
