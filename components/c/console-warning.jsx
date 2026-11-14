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
		"content": `<style>.p0ywo31tp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v17h-19ZM7 7v5.5M7 16h.01m3.49-6.25h7m-7 6.25h4");
}
</style><path class="p0ywo31tp"/>`,
		"fallback": "uix-sharp:console-warning",
	});
}

export default Component;
