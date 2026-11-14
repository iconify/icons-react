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
		"content": `<style>.ws0l13uiw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h9V9h-9Zm10 10h9V19h-9ZM7 9v2.5m-2.25 0h4.5M17 19v2.5m-2.25 0h4.5M11.5 5.75H17v6.75");
}
</style><path class="ws0l13uiw"/>`,
		"fallback": "uix-sharp:grpc",
	});
}

export default Component;
