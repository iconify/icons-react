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
		"content": `<style>.xfbm9gbfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4s-4.5 5-4.5 9c0 2.5 2 4 4.5 4s4.5-1.5 4.5-4c0-4-4.5-9-4.5-9ZM4.5 20.5l15-3m-15 0l15 3");
}
</style><path class="xfbm9gbfm"/>`,
		"fallback": "uix-sharp:campfire",
	});
}

export default Component;
