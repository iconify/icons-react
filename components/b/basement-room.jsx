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
		"content": `<style>.b4g00i8zc {
  d: path("M6.5 4.5v3.75H10V12h3.5v3.75H17v3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yah95j4iv {
  d: path("M2 4.5h20m-18.5 0v15h17v-15");
}
</style><g class="ulnmmdpxh"><path class="yah95j4iv"/><path class="b4g00i8zc"/></g>`,
		"fallback": "uix-sharp:basement-room",
	});
}

export default Component;
