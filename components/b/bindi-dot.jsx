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
		"content": `<style>.bkq7k9bvk {
  d: path("M4.5 13.5q7.5 11.5 15 0");
}

.red4-8btf {
  fill: currentColor;
  d: path("M8.5 8.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="red4-8btf"/><path class="bkq7k9bvk"/></g>`,
		"fallback": "uix-sharp:bindi-dot",
	});
}

export default Component;
