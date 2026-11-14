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
		"content": `<style>.d6idqbboj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19v15h-19Zm0 4.5h19M6 14.25h.01m3.24 0h.01m3.24 0h.01m3.24 0h.01m3.24-2v4");
}
</style><path class="d6idqbboj"/>`,
		"fallback": "uix-sharp:card-number-input",
	});
}

export default Component;
