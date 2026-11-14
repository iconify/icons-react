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
		"content": `<style>.f2wbs8bvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6h17v15.5h-17ZM8 2.5h8V6H8ZM7.5 10h.01M13 9.5h.01M10 14h.01m6.49-1h.01M7.5 18h.01M14 18h.01");
}
</style><path class="f2wbs8bvc"/>`,
		"fallback": "uix-sharp:gas-state",
	});
}

export default Component;
