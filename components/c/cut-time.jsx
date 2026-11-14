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
		"content": `<style>.hlc2qyb_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.75 6.75a7.5 7.5 0 1 0 0 10.5M12 2.5v19");
}
</style><path class="hlc2qyb_y"/>`,
		"fallback": "uix-sharp:cut-time",
	});
}

export default Component;
