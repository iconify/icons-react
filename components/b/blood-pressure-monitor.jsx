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
		"content": `<style>.jfe07_b3o {
  d: path("M7.75 16.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM16 8c5 0 5.5 4.5 3.75 7c-1.5 2-1.25 4.75 1.75 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.we858dadw {
  d: path("M2.5 3.5H16v17H2.5ZM6 8h6.5M6 11.75h4.5");
}
</style><g class="ulnmmdpxh"><path class="we858dadw"/><path class="jfe07_b3o"/></g>`,
		"fallback": "uix-sharp:blood-pressure-monitor",
	});
}

export default Component;
