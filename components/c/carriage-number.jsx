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
		"content": `<style>.eqk34bcsi {
  d: path("M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM7 7.5h10V13H7Zm3 2.75h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vl7bzrwxf {
  d: path("M2.5 16.5V8C2.5 5 6 3.5 12 3.5S21.5 5 21.5 8v8.5Z");
}
</style><g class="ulnmmdpxh"><path class="vl7bzrwxf"/><path class="eqk34bcsi"/></g>`,
		"fallback": "uix-sharp:carriage-number",
	});
}

export default Component;
