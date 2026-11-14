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
		"content": `<style>.zrva2yb3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 5h4v14h-4ZM2.5 8h6.25v8H2.5ZM21 2.5v19m-9.5-19v19");
}
</style><path class="zrva2yb3p"/>`,
		"fallback": "uix-sharp:distribute-right",
	});
}

export default Component;
