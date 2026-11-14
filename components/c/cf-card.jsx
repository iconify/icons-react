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
		"content": `<style>.iylu0kx9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 7l4-4h9a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2Zm3 10v4m3-4v4m3-4v4m3-4v4");
}
</style><path class="iylu0kx9n"/>`,
		"fallback": "uix-sharp:cf-card",
	});
}

export default Component;
