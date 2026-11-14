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
		"content": `<style>.izucajaie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8L4 3h16l1.5 5m-18 6h17v7.5h-17Zm-1-6c0 1.75 3.75 1.75 3.75 0c0 1.75 4 1.75 4 0c0 1.75 3.5 1.75 3.5 0c0 1.75 4 1.75 4 0c0 1.75 3.75 1.75 3.75 0m-17 2v4m15-4v4M12 15.75v4m-2-2h4");
}
</style><path class="izucajaie"/>`,
		"fallback": "uix-sharp:first-aid-station",
	});
}

export default Component;
