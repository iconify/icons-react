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
		"content": `<style>.tf49yn3gy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6L8 15h8l4.5 4M12 15v6m-4 0h8M7.5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="tf49yn3gy"/>`,
		"fallback": "uix-sharp:dental-patient",
	});
}

export default Component;
