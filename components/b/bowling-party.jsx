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
		"content": `<style>.kg73uv3ot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16A5.25 5.25 0 1 0 13 16a5.25 5.25 0 1 0-10.5 0Zm14 5.5c-.75-4-.75-7.25.75-10.25c.5-1-.5-2.75-.5-5s.75-3.75 2-3.75s2 1.5 2 3.75s-1 4-.5 5c1.5 3 1.5 6.25.75 10.25ZM6 14.5h.01m2.49-1.25h.01M9.25 16h.01");
}
</style><path class="kg73uv3ot"/>`,
		"fallback": "uix-sharp:bowling-party",
	});
}

export default Component;
