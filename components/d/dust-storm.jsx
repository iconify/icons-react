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
		"content": `<style>.nrb5n9bvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5H14a3 3 0 1 0-3-3m-8.5 7H12m3.5 0h.01m3.49 0h.01M6 16.5h10.5M9 20h.01M13 20h.01");
}
</style><path class="nrb5n9bvi"/>`,
		"fallback": "uix-sharp:dust-storm",
	});
}

export default Component;
