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
		"content": `<style>.bi5icharf {
  d: path("M9 16.5h7.5a2 2 0 0 0 0-4a3.75 3.75 0 0 0-7.5 0a2 2 0 0 0 0 4Z");
}

.el1n0acwg {
  d: path("M11.25 9A2.75 2.75 0 1 0 9 11.75");
}

.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="el1n0acwg"/><path class="bi5icharf"/></g>`,
		"fallback": "uix-sharp:forecast-day",
	});
}

export default Component;
